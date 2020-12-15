"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
const sequelize_1 = require("@nestjs/sequelize");
const user_entity_1 = require("../database/model/user.entity");
const auth_module_1 = require("../auth/auth.module");
const platform_express_1 = require("@nestjs/platform-express");
const path = require("path");
const multer = require("multer");
const nanoid_1 = require("nanoid");
const _config_1 = require("../_config");
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        imports: [
            platform_express_1.MulterModule.register({
                dest: path.join(__dirname, '..', path.sep, _config_1.fileUploadDestination),
                preservePath: true,
                storage: multer.diskStorage({
                    destination: function (req, file, cb) {
                        cb(null, `${_config_1.fileUploadDestination}/`);
                    },
                    filename: function (req, file, cb) {
                        cb(null, nanoid_1.nanoid() + '_' + Date.now() + path.extname(file.originalname));
                    }
                })
            }),
            common_1.forwardRef(() => auth_module_1.AuthModule),
            sequelize_1.SequelizeModule.forFeature([user_entity_1.default])
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService],
        exports: [user_service_1.UserService]
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map