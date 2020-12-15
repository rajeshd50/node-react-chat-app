import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { bcryptConstants } from 'src/_config';
import { InjectModel } from '@nestjs/sequelize';
import Session from '../database/model/session.entity'
import { AppResponse } from 'src/_config/appResponse';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Session)
    private readonly sessionModel: typeof Session,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  async validateUser(email: string, pass: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const user = await this.userService.findOne(email);
      if (user) {
        bcrypt.compare(pass, user.password, (err, isSame) => {
          if (err || !isSame) {
            return resolve(null)
          }
          const { password, ...result } = user;
          return resolve(result)
        })
      } else {
        return resolve(null);
      }
    })
  }

  async validateToken(token: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.sessionModel.findOne({
        where: {
          token,
        }
      }).then(session => {
        if (session) {
          return resolve(true)
        } else {
          return resolve(false);
        }
      }).catch(err => {
        return resolve(false);
      })
    })
  }

  async login(user: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const payload = { email: user.email, sub: user.id };
      let access_token = this.jwtService.sign(payload)
      this.sessionModel.destroy({
        where: {
          userId: user.id
        }
      }).then(value => {
        let newSession = new Session()
        newSession.userId = user.id
        newSession.token = access_token
        /**
         * save session
         */
        newSession.save().then(saved => {
          this.sessionModel.findOne({
            where: {
              id: saved.id,
            },
            include: [{
              all: true
            }]
          }).then(data => {
            return resolve(AppResponse(true, data.toJSON(), 'User logged in'));
          }).catch(err => {
            return resolve(AppResponse(false, null, 'Unable to login'));
          })
        }).catch(err => {
          return resolve(AppResponse(false, null, 'Unable to login'));
        })
      }).catch(err => {
        return resolve(AppResponse(false, null, 'Unable to login'));
      })
    })
  }

  async logout(id: number): Promise<any> {
    return new Promise(async (resolve, reject) => {
      this.sessionModel.destroy({
        where: {
          userId: id
        }
      }).then(value => {
        return resolve(AppResponse(true, null, 'User logged out'));
      }).catch(err => {
        return resolve(AppResponse(false, null, 'Unable to logout'));
      })
    })
  }
}