import { Controller, Get, Query, UseGuards, Request, Body, Post } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { JwtSessionGuard } from 'src/auth/guard/jwt-session.guard';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(
    private messageService: MessageService,
  ) {}

  @UseGuards(JwtAuthGuard, JwtSessionGuard)
  @Post('send')
  async sendMessage(@Request() req, @Body() data) {
    let dt = {
      text: data ? data.text : '',
      receiverId: data ? data.to : '',
      senderId: req.user.id,
    }
    return await this.messageService.createMessage(dt);
  }

  @UseGuards(JwtAuthGuard, JwtSessionGuard)
  @Get('friends')
  async getFriendList(@Request() req) {
    return await this.messageService.friendList(req.user.id);
  }

  @UseGuards(JwtAuthGuard, JwtSessionGuard)
  @Get('list')
  async getMessageList(@Request() req, @Query() q) {
    return await this.messageService.messageList(req.user.id, q.user, q.limit ? Number(q.limit) : 100, q.offset ? Number(q.offset) : 0);
  }
}
