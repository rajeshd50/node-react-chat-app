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
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const friends_entity_1 = require("../database/model/friends.entity");
const message_entity_1 = require("../database/model/message.entity");
const appResponse_1 = require("../_config/appResponse");
const async_1 = require("async");
const sequelize_2 = require("sequelize");
let MessageService = class MessageService {
    constructor(messageModel, friendsModel, sequelize) {
        this.messageModel = messageModel;
        this.friendsModel = friendsModel;
        this.sequelize = sequelize;
    }
    async createMessage(data) {
        return new Promise((resolve, reject) => {
            async_1.default.waterfall([
                (cb) => {
                    if (!data || !data.text) {
                        return cb(appResponse_1.AppResponse(false, null, 'Message required'));
                    }
                    if (!data || !data.senderId) {
                        return cb(appResponse_1.AppResponse(false, null, 'Sender required'));
                    }
                    if (!data || !data.receiverId) {
                        return cb(appResponse_1.AppResponse(false, null, 'Receiver required'));
                    }
                    if (data.receiverId == data.senderId) {
                        return cb(appResponse_1.AppResponse(false, null, 'Receiver and sender cant be same'));
                    }
                    return cb(null);
                },
                (cb) => {
                    let msg = new message_entity_1.default();
                    msg.text = data.text;
                    msg.senderId = data.senderId;
                    msg.receiverId = data.receiverId;
                    msg.save().then(msgObj => {
                        console.log('message created', msgObj.toJSON());
                        return cb(null, msgObj);
                    }).catch(err => {
                        console.log('error while saving', err);
                        return cb(appResponse_1.AppResponse(false, null, 'Unable to save message'));
                    });
                },
                (msg, cb) => {
                    this.friendsModel.findOne({
                        where: {
                            userId: msg.senderId,
                            friendId: msg.receiverId,
                        }
                    }).then(found => {
                        if (found) {
                            return cb(null, msg);
                        }
                        else {
                            let frnd = new friends_entity_1.default();
                            frnd.userId = msg.senderId;
                            frnd.friendId = msg.receiverId;
                            frnd.last_message_time = msg.createdAt;
                            frnd.save().then(saved => {
                                return cb(null, msg);
                            }).catch(err => {
                                return cb(appResponse_1.AppResponse(false, null, 'Message sent but friend list not updated'));
                            });
                        }
                    }).catch(err => {
                        return cb(appResponse_1.AppResponse(false, null, 'Message sent but friend list not updated'));
                    });
                },
                (msg, cb) => {
                    this.friendsModel.findOne({
                        where: {
                            userId: msg.receiverId,
                            friendId: msg.senderId,
                        }
                    }).then(found => {
                        if (found) {
                            return cb(null, msg);
                        }
                        else {
                            let frnd = new friends_entity_1.default();
                            frnd.userId = msg.receiverId;
                            frnd.friendId = msg.senderId;
                            frnd.last_message_time = msg.createdAt;
                            frnd.save().then(saved => {
                                return cb(null, msg);
                            }).catch(err => {
                                return cb(appResponse_1.AppResponse(false, null, 'Message sent but friend list not updated'));
                            });
                        }
                    }).catch(err => {
                        return cb(appResponse_1.AppResponse(false, null, 'Message sent but friend list not updated'));
                    });
                },
                (msg, cb) => {
                    this.messageModel.findOne({
                        where: { id: msg.id },
                        include: [{ all: true }],
                    }).then(message => {
                        return cb(null, appResponse_1.AppResponse(true, message.toJSON(), 'Message sent'));
                    }).catch(err => {
                        console.log('error while saving6', err);
                        return cb(null, appResponse_1.AppResponse(true, msg.toJSON(), 'Message sent'));
                    });
                }
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
    async friendList(id) {
        return new Promise((resolve, reject) => {
            this.friendsModel.findAll({
                where: {
                    userId: id,
                },
                include: [{ all: true }],
                order: [
                    ['last_message_time', 'DESC']
                ]
            }).then(friends => {
                return resolve(appResponse_1.AppResponse(true, friends.map(x => x.toJSON()), 'Friend list'));
            }).catch(err => {
                return resolve(appResponse_1.AppResponse(false, null, 'Unable to fetch friend list'));
            });
        });
    }
    async messageList(id, user, limit = 100, offset = 0) {
        return new Promise((resolve, reject) => {
            async_1.default.waterfall([
                (cb) => {
                    this.messageModel.count({
                        where: {
                            [sequelize_2.Op.and]: [{
                                    [sequelize_2.Op.or]: [{
                                            senderId: id,
                                        }, {
                                            receiverId: id,
                                        }],
                                }, {
                                    [sequelize_2.Op.or]: [{
                                            senderId: user,
                                        }, {
                                            receiverId: user,
                                        }]
                                }],
                        },
                    }).then(total => {
                        return cb(null, total);
                    }).catch(err => {
                        return cb(appResponse_1.AppResponse(false, null, 'Unable to fetch message list'));
                    });
                },
                (total, cb) => {
                    this.messageModel.findAll({
                        where: {
                            [sequelize_2.Op.and]: [{
                                    [sequelize_2.Op.or]: [{
                                            senderId: id,
                                        }, {
                                            receiverId: id,
                                        }],
                                }, {
                                    [sequelize_2.Op.or]: [{
                                            senderId: user,
                                        }, {
                                            receiverId: user,
                                        }]
                                }],
                        },
                        include: [{ all: true }],
                        order: [
                            ['createdAt', 'DESC']
                        ],
                        limit,
                        offset,
                    }).then(messages => {
                        return cb(null, appResponse_1.AppResponse(true, {
                            total,
                            limit,
                            offset,
                            messages: messages.map(x => x.toJSON())
                        }, 'Message list'));
                    }).catch(err => {
                        return cb(appResponse_1.AppResponse(false, null, 'Unable to fetch message list'));
                    });
                }
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
};
MessageService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(message_entity_1.default)),
    __param(1, sequelize_1.InjectModel(friends_entity_1.default)),
    __metadata("design:paramtypes", [Object, Object, sequelize_typescript_1.Sequelize])
], MessageService);
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map