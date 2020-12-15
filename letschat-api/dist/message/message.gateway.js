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
exports.MessageGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const jwt_auth_guard_1 = require("../auth/guard/jwt-auth.guard");
const _config_1 = require("../_config");
const CreateMessage_dto_1 = require("./dto/CreateMessage.dto");
const message_service_1 = require("./message.service");
let MessageGateway = class MessageGateway {
    constructor(messageService) {
        this.messageService = messageService;
        this.connections = [];
    }
    afterInit(server) {
        console.log('socket initialized');
    }
    handleConnection(client, ...args) {
        if (client.handshake.query && client.handshake.query.userId) {
            let findIndex = this.connections.findIndex(x => x.userId == client.handshake.query.userId);
            if (findIndex >= 0) {
                this.connections[findIndex].sockets.push(client);
            }
            else {
                this.connections.push({
                    userId: client.handshake.query.userId,
                    sockets: [client]
                });
            }
        }
    }
    handleDisconnect(client) {
        if (client.handshake.query && client.handshake.query.userId) {
            let findIndex = this.connections.findIndex(x => x.userId == client.handshake.query.userId);
            if (findIndex >= 0) {
                let sockets = this.connections[findIndex].sockets;
                sockets = sockets.filter(x => x.id != client.id);
                this.connections[findIndex].sockets = sockets;
            }
        }
    }
    handleMessageEvent(client, data) {
        this.messageService.createMessage(data).then(value => {
            if (value && value.data) {
                let find = this.connections.find(x => x.userId == data.receiverId);
                if (find) {
                    find.sockets.map(s => {
                        s.emit(_config_1.SOCKET_EVENTS.MESSAGE, value.data);
                    });
                }
                this.messageService.friendList(data.receiverId).then(value => {
                    if (value && value.data) {
                        let find = this.connections.find(x => x.userId == data.receiverId);
                        if (find) {
                            find.sockets.map(s => {
                                s.emit(_config_1.SOCKET_EVENTS.FRIENDS, value.data);
                            });
                        }
                    }
                }).catch(err => { });
                this.messageService.friendList(data.senderId).then(value => {
                    if (value && value.data) {
                        let find = this.connections.find(x => x.userId == data.senderId);
                        if (find) {
                            find.sockets.map(s => {
                                s.emit(_config_1.SOCKET_EVENTS.FRIENDS, value.data);
                            });
                        }
                    }
                }).catch(err => { });
            }
        }).catch(err => {
            console.log('Error while sending message', err);
        });
    }
};
__decorate([
    websockets_1.WebSocketServer(),
    __metadata("design:type", Object)
], MessageGateway.prototype, "server", void 0);
__decorate([
    websockets_1.SubscribeMessage(_config_1.SOCKET_EVENTS.MESSAGE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateMessage_dto_1.CreateMessageDto]),
    __metadata("design:returntype", void 0)
], MessageGateway.prototype, "handleMessageEvent", null);
MessageGateway = __decorate([
    websockets_1.WebSocketGateway(),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], MessageGateway);
exports.MessageGateway = MessageGateway;
//# sourceMappingURL=message.gateway.js.map