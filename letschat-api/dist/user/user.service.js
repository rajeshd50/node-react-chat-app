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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const user_entity_1 = require("../database/model/user.entity");
const bcrypt = require("bcrypt");
const _config_1 = require("../_config");
const appResponse_1 = require("../_config/appResponse");
const sequelize_2 = require("sequelize");
const auth_service_1 = require("../auth/auth.service");
const async_1 = require("async");
const fs = require("fs");
const path = require("path");
let UserService = class UserService {
    constructor(authService, userModel, sequelize) {
        this.authService = authService;
        this.userModel = userModel;
        this.sequelize = sequelize;
    }
    create(createUserDto) {
        return new Promise((resolve, reject) => {
            const user = new user_entity_1.default();
            user.name = createUserDto.name;
            user.email = createUserDto.email;
            bcrypt.hash(createUserDto.password, _config_1.bcryptConstants.salt, (err, encPass) => {
                if (err || !encPass) {
                    return resolve(appResponse_1.AppResponse(false, encPass, 'Error while registering new user'));
                }
                user.password = encPass;
                user.save().then(data => {
                    this.authService.login(data.toJSON()).then(data => {
                        return resolve(data);
                    }).catch(err => {
                        return resolve(err);
                    });
                }).catch(err => {
                    return resolve(appResponse_1.AppResponse(false, err && err.errors ? err.errors.map(x => ({
                        message: x.message,
                        type: x.type,
                        path: x.path,
                        value: x.value,
                    })) : null, 'Error while registering new user'));
                });
            });
        });
    }
    async findOne(email) {
        return this.userModel.findOne({
            where: {
                email,
            },
            attributes: {
                include: ['password']
            }
        }).then(data => {
            return data.toJSON();
        }).catch(err => {
            return undefined;
        });
    }
    async getUserDetails(id) {
        return new Promise((resolve, reject) => {
            this.userModel.findOne({
                where: { id },
                include: [{ all: true }]
            }).then(user => {
                return resolve(appResponse_1.AppResponse(true, user.toJSON(), 'User details'));
            }).catch(err => {
                return resolve(appResponse_1.AppResponse(false, err, 'User details not found'));
            });
        });
    }
    searchUser(userId, text) {
        return new Promise((resolve, reject) => {
            if (!text) {
                return resolve(appResponse_1.AppResponse(true, [], 'Text required'));
            }
            async_1.default.waterfall([
                (cb) => {
                    this.userModel.findOne({
                        where: { id: userId },
                        include: [{ all: true }],
                    }).then(userData => {
                        let friends = userData.friends.map(f => f.id);
                        return cb(null, [...friends, userId]);
                    }).catch(err => {
                        return cb(appResponse_1.AppResponse(false, null, 'User not found'));
                    });
                },
                (friends, cb) => {
                    this.userModel.findAll({
                        where: {
                            name: {
                                [sequelize_2.Op.like]: `%${text}%`
                            },
                            id: {
                                [sequelize_2.Op.notIn]: friends
                            }
                        }
                    }).then(users => {
                        return cb(null, appResponse_1.AppResponse(true, users.map(x => ({
                            name: x.name,
                            id: x.id,
                        })), 'User list'));
                    }).catch(err => {
                        return cb(appResponse_1.AppResponse(false, null, 'User list not found'));
                    });
                },
            ], (err, data) => {
                if (err) {
                    return resolve(err);
                }
                else {
                    return resolve(data);
                }
            });
        });
    }
    uploadImage(id, file) {
        const deleteFile = (name) => {
            fs.unlinkSync(path.join(__dirname, '..', path.sep, '..', path.sep, _config_1.fileUploadDestination, path.sep, name));
        };
        return new Promise((resolve, reject) => {
            if (!id || !file) {
                return resolve(appResponse_1.AppResponse(true, null, 'Please select valid image file'));
            }
            async_1.default.waterfall([
                (cb) => {
                    this.userModel.findOne({
                        where: { id }
                    }).then(user => {
                        console.log('user image', user.image);
                        if (user.image) {
                            let imagePath = path.join(__dirname, '..', path.sep, '..', path.sep, _config_1.fileUploadDestination, path.sep, user.image);
                            console.log('imagePath', imagePath);
                            if (fs.existsSync(imagePath)) {
                                fs.unlinkSync(imagePath);
                            }
                        }
                        return cb(null, user);
                    }).catch(err => {
                        return cb(appResponse_1.AppResponse(false, null, 'Unable to change profile picture'));
                    });
                },
                (user, cb) => {
                    user.image = file.filename;
                    user.save().then(userData => {
                        return cb(null, appResponse_1.AppResponse(true, userData, 'User profile pic changed'));
                    }).catch(_ => {
                        return cb(appResponse_1.AppResponse(false, null, 'Unable to change profile picture'));
                    });
                }
            ], (err, data) => {
                if (err && file && file.filename && file.destination) {
                    deleteFile(file.filename);
                }
                return resolve(err ? err : data);
            });
        });
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(common_1.forwardRef(() => auth_service_1.AuthService))),
    __param(1, sequelize_1.InjectModel(user_entity_1.default)),
    __metadata("design:paramtypes", [auth_service_1.AuthService, Object, sequelize_typescript_1.Sequelize])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map