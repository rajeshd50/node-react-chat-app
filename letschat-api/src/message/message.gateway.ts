import { UseGuards } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Socket, Server } from 'socket.io';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { SOCKET_EVENTS } from 'src/_config';
import { CreateMessageDto } from './dto/CreateMessage.dto';
import { MessageService } from './message.service';

interface ClientConnections {
  userId: number;
  sockets: Socket[];
}

@WebSocketGateway()
export class MessageGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  /**
   * store client connection
   */
  connections: ClientConnections[] = []

  constructor(
    private messageService: MessageService,
  ) { }

  afterInit(server: any) {
    console.log('socket initialized');
  }
  /**
   * on client connection init
   */
  handleConnection(client: Socket, ...args: any[]) {
    if (client.handshake.query && client.handshake.query.userId) {
      let findIndex = this.connections.findIndex(x => x.userId == client.handshake.query.userId)

      if (findIndex >= 0) {
        this.connections[findIndex].sockets.push(client)
      } else {
        this.connections.push({
          userId: client.handshake.query.userId,
          sockets: [client]
        })
      }
    }
  }
  /**
   * on client connection destroy
   */
  handleDisconnect(client: Socket) {
    if (client.handshake.query && client.handshake.query.userId) {
      let findIndex = this.connections.findIndex(x => x.userId == client.handshake.query.userId)

      if (findIndex >= 0) {
        let sockets = this.connections[findIndex].sockets
        sockets = sockets.filter(x => x.id != client.id)
        this.connections[findIndex].sockets = sockets
      }
    }
  }

  /**
   * handle client message events
   */
  @SubscribeMessage(SOCKET_EVENTS.MESSAGE)
  handleMessageEvent(client: Socket, data: CreateMessageDto) {
    this.messageService.createMessage(data).then(value => {
      if (value && value.data) {
        let find = this.connections.find(x => x.userId == data.receiverId)
        if (find) {
          find.sockets.map(s => {
            s.emit(SOCKET_EVENTS.MESSAGE, value.data)
          })
        }
        this.messageService.friendList(data.receiverId).then(value => {
          if (value && value.data) {
            let find = this.connections.find(x => x.userId == data.receiverId)
            if (find) {
              find.sockets.map(s => {
                s.emit(SOCKET_EVENTS.FRIENDS, value.data)
              })
            }
          }
        }).catch(err => { });
        this.messageService.friendList(data.senderId).then(value => {
          if (value && value.data) {
            let find = this.connections.find(x => x.userId == data.senderId)
            if (find) {
              find.sockets.map(s => {
                s.emit(SOCKET_EVENTS.FRIENDS, value.data)
              })
            }
          }
        }).catch(err => { });
      }
    }).catch(err => {
      console.log('Error while sending message', err)
    })
  }
}