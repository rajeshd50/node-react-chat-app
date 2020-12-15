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
exports.JwtSessionGuard = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../auth.service");
let JwtSessionGuard = class JwtSessionGuard {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        let authString = request.headers.authorization;
        let tokens = authString ? authString.split(' ') : [];
        return new Promise((resolve, reject) => {
            if (tokens && tokens.length == 2) {
                this.authService.validateToken(tokens[1]).then(isSuccess => {
                    if (isSuccess) {
                        return resolve(true);
                    }
                    else {
                        throw new common_1.HttpException('Session Expired', common_1.HttpStatus.UNAUTHORIZED);
                        return reject(false);
                    }
                }).catch(e => {
                    return resolve(false);
                });
            }
            else {
                return resolve(false);
            }
        });
    }
};
JwtSessionGuard = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], JwtSessionGuard);
exports.JwtSessionGuard = JwtSessionGuard;
//# sourceMappingURL=jwt-session.guard.js.map