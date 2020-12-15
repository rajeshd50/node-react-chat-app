import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { CreateMessageDto } from './dto/CreateMessage.dto';
import { MessageService } from './message.service';
interface ClientConnections {
    userId: number;
    sockets: Socket[];
}
export declare class MessageGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private messageService;
    server: Server;
    connections: ClientConnections[];
    constructor(messageService: MessageService);
    afterInit(server: any): void;
    handleConnection(client: Socket, ...args: any[]): void;
    handleDisconnect(client: Socket): void;
    handleMessageEvent(client: Socket, data: CreateMessageDto): void;
}
export {};
