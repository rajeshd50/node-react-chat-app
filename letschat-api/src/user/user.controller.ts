import { Body, Controller, Get, Post, UseGuards, Request, Query, UseInterceptors, UploadedFile, HttpException, HttpStatus } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { JwtSessionGuard } from 'src/auth/guard/jwt-session.guard';
import { UserService } from './user.service';
import * as path from 'path'

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
  ) {}

  @Post('register')
  async register(@Body() data) {
    let resp = await this.userService.create(data);
    return resp;
  }

  @UseGuards(JwtAuthGuard, JwtSessionGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    console.log('Here', req.user)
    return await this.userService.getUserDetails(req.user.id);
  }

  @UseGuards(JwtAuthGuard, JwtSessionGuard)
  @Get('search')
  async searchUser(@Request() req, @Query() q) {
    return await this.userService.searchUser(req.user.id, q.text);
  }

  @UseGuards(JwtAuthGuard, JwtSessionGuard)
  @Post('upload-profile-picture')
  @UseInterceptors(FileInterceptor('image', {
    fileFilter: (req: any, file, callback) => {
      var ext = path.extname(file.originalname);
      if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
          return callback(new HttpException('Only images(png/jpg/gif/jpeg) are allowed', HttpStatus.BAD_REQUEST), false)
      }
      callback(null, true)
    }
  }))
  async uploadProfilePicture(@Request() req, @UploadedFile() file) {
    return await this.userService.uploadImage(req.user.id, file);
  }
}
