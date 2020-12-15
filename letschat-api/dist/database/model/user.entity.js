"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const _config_1 = require("../../_config");
const friends_entity_1 = require("./friends.entity");
const session_entity_1 = require("./session.entity");
let Users = class Users extends sequelize_typescript_1.Model {
    get imageFullPath() {
        return this.getDataValue('image') ? `${_config_1.serverUrl}${this.getDataValue('image')}` : '';
    }
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Users.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    sequelize_typescript_1.Index({
        name: 'email-index',
        type: 'UNIQUE',
        unique: true,
    }),
    sequelize_typescript_1.Unique({
        name: 'Email',
        msg: 'Email already exists'
    }),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Users.prototype, "image", void 0);
__decorate([
    sequelize_typescript_1.Column({ defaultValue: true }),
    __metadata("design:type", Boolean)
], Users.prototype, "isActive", void 0);
__decorate([
    sequelize_typescript_1.Column({ defaultValue: false }),
    __metadata("design:type", Boolean)
], Users.prototype, "isOnline", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => session_entity_1.default),
    __metadata("design:type", session_entity_1.default)
], Users.prototype, "session", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => friends_entity_1.default, 'userId'),
    __metadata("design:type", Array)
], Users.prototype, "friends", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.VIRTUAL),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Users.prototype, "imageFullPath", null);
Users = __decorate([
    sequelize_typescript_1.DefaultScope(() => ({
        attributes: {
            exclude: ['password']
        }
    })),
    sequelize_typescript_1.Table
], Users);
exports.default = Users;
//# sourceMappingURL=user.entity.js.map