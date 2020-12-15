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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const jwt_auth_guard_1 = require("../auth/guard/jwt-auth.guard");
const jwt_session_guard_1 = require("../auth/guard/jwt-session.guard");
const user_service_1 = require("./user.service");
const path = require("path");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async register(data) {
        let resp = await this.userService.create(data);
        return resp;
    }
    async getProfile(req) {
        console.log('Here', req.user);
        return await this.userService.getUserDetails(req.user.id);
    }
    async searchUser(req, q) {
        return await this.userService.searchUser(req.user.id, q.text);
    }
    async uploadProfilePicture(req, file) {
        return await this.userService.uploadImage(req.user.id, file);
    }
};
__decorate([
    common_1.Post('register'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "register", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, jwt_session_guard_1.JwtSessionGuard),
    common_1.Get('profile'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getProfile", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, jwt_session_guard_1.JwtSessionGuard),
    common_1.Get('search'),
    __param(0, common_1.Request()), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "searchUser", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, jwt_session_guard_1.JwtSessionGuard),
    common_1.Post('upload-profile-picture'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('image', {
        fileFilter: (req, file, callback) => {
            var ext = path.extname(file.originalname);
            if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
                return callback(new common_1.HttpException('Only images(png/jpg/gif/jpeg) are allowed', common_1.HttpStatus.BAD_REQUEST), false);
            }
            callback(null, true);
        }
    })),
    __param(0, common_1.Request()), __param(1, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "uploadProfilePicture", null);
UserController = __decorate([
    common_1.Controller('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map