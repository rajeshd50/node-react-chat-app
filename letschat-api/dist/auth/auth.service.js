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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const _config_1 = require("../_config");
const sequelize_1 = require("@nestjs/sequelize");
const session_entity_1 = require("../database/model/session.entity");
const appResponse_1 = require("../_config/appResponse");
let AuthService = class AuthService {
    constructor(sessionModel, userService, jwtService) {
        this.sessionModel = sessionModel;
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async validateUser(email, pass) {
        return new Promise(async (resolve, reject) => {
            const user = await this.userService.findOne(email);
            if (user) {
                bcrypt.compare(pass, user.password, (err, isSame) => {
                    if (err || !isSame) {
                        return resolve(null);
                    }
                    const { password } = user, result = __rest(user, ["password"]);
                    return resolve(result);
                });
            }
            else {
                return resolve(null);
            }
        });
    }
    async validateToken(token) {
        return new Promise((resolve, reject) => {
            this.sessionModel.findOne({
                where: {
                    token,
                }
            }).then(session => {
                if (session) {
                    return resolve(true);
                }
                else {
                    return resolve(false);
                }
            }).catch(err => {
                return resolve(false);
            });
        });
    }
    async login(user) {
        return new Promise(async (resolve, reject) => {
            const payload = { email: user.email, sub: user.id };
            let access_token = this.jwtService.sign(payload);
            this.sessionModel.destroy({
                where: {
                    userId: user.id
                }
            }).then(value => {
                let newSession = new session_entity_1.default();
                newSession.userId = user.id;
                newSession.token = access_token;
                newSession.save().then(saved => {
                    this.sessionModel.findOne({
                        where: {
                            id: saved.id,
                        },
                        include: [{
                                all: true
                            }]
                    }).then(data => {
                        return resolve(appResponse_1.AppResponse(true, data.toJSON(), 'User logged in'));
                    }).catch(err => {
                        return resolve(appResponse_1.AppResponse(false, null, 'Unable to login'));
                    });
                }).catch(err => {
                    return resolve(appResponse_1.AppResponse(false, null, 'Unable to login'));
                });
            }).catch(err => {
                return resolve(appResponse_1.AppResponse(false, null, 'Unable to login'));
            });
        });
    }
    async logout(id) {
        return new Promise(async (resolve, reject) => {
            this.sessionModel.destroy({
                where: {
                    userId: id
                }
            }).then(value => {
                return resolve(appResponse_1.AppResponse(true, null, 'User logged out'));
            }).catch(err => {
                return resolve(appResponse_1.AppResponse(false, null, 'Unable to logout'));
            });
        });
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(session_entity_1.default)),
    __metadata("design:paramtypes", [Object, user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map