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
exports.MessageController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guard/jwt-auth.guard");
const jwt_session_guard_1 = require("../auth/guard/jwt-session.guard");
const message_service_1 = require("./message.service");
let MessageController = class MessageController {
    constructor(messageService) {
        this.messageService = messageService;
    }
    async sendMessage(req, data) {
        let dt = {
            text: data ? data.text : '',
            receiverId: data ? data.to : '',
            senderId: req.user.id,
        };
        return await this.messageService.createMessage(dt);
    }
    async getFriendList(req) {
        return await this.messageService.friendList(req.user.id);
    }
    async getMessageList(req, q) {
        return await this.messageService.messageList(req.user.id, q.user, q.limit ? Number(q.limit) : 100, q.offset ? Number(q.offset) : 0);
    }
};
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, jwt_session_guard_1.JwtSessionGuard),
    common_1.Post('send'),
    __param(0, common_1.Request()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "sendMessage", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, jwt_session_guard_1.JwtSessionGuard),
    common_1.Get('friends'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "getFriendList", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, jwt_session_guard_1.JwtSessionGuard),
    common_1.Get('list'),
    __param(0, common_1.Request()), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "getMessageList", null);
MessageController = __decorate([
    common_1.Controller('message'),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], MessageController);
exports.MessageController = MessageController;
//# sourceMappingURL=message.controller.js.map