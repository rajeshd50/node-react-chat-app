import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import Users from '../database/model/user.entity'
import { CreateUserDto } from './dto/createUser.dto';
import * as bcrypt from 'bcrypt'
import { bcryptConstants, fileUploadDestination } from 'src/_config';
import { AppResponse } from 'src/_config/appResponse';
import { Op } from 'sequelize';
import { AuthService } from 'src/auth/auth.service';
import async from 'async'
import * as fs from 'fs'
import * as path from 'path'

@Injectable()
export class UserService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
    @InjectModel(Users) 
    private readonly userModel: typeof Users,
    private readonly sequelize: Sequelize,
  ){}

  create(createUserDto: CreateUserDto): Promise<any> {
    return new Promise((resolve, reject) => {
      const user = new Users();
      user.name = createUserDto.name;
      user.email = createUserDto.email;

      bcrypt.hash(createUserDto.password, bcryptConstants.salt, (err, encPass) => {
        if (err || !encPass) {
          return resolve(AppResponse(false, encPass, 'Error while registering new user'));
        }
        user.password = encPass

        user.save().then(data => {
          this.authService.login(data.toJSON()).then(data => {
            return resolve(data)
          }).catch(err => {
            return resolve(err);
          })
        }).catch(err => {
          return resolve(AppResponse(false, err && err.errors ? err.errors.map(x => ({
            message: x.message,
            type: x.type,
            path: x.path,
            value: x.value,
          })) : null, 'Error while registering new user'));
        })
      })
    })
  }

  async findOne(email: string): Promise<Users | undefined> {
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
      return undefined
    })
  }

  async getUserDetails(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.userModel.findOne({
        where: {id},
        include: [{all: true}]
      }).then(user => {
        return resolve(AppResponse(true, user.toJSON(), 'User details'))
      }).catch(err => {
        return resolve(AppResponse(false, err, 'User details not found'))
      })
    })
  }

  searchUser(userId: number, text: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!text) {
        return resolve(AppResponse(true, [], 'Text required'))
      }
      async.waterfall([
        (cb) => {
          this.userModel.findOne({
            where: {id: userId},
            include: [{all: true}],
          }).then(userData => {
            let friends = userData.friends.map(f => f.id)
            return cb(null, [...friends, userId])
          }).catch(err => {
            return cb(AppResponse(false, null, 'User not found'))
          })
        },
        (friends, cb) => {
          this.userModel.findAll({
            where: {
              name: {
                [Op.like]: `%${text}%`
              },
              id: {
                [Op.notIn]: friends
              }
            }
          }).then(users => {
            return cb(null, AppResponse(true, users.map(x => ({
              name: x.name,
              id: x.id,
            })), 'User list'))
          }).catch(err => {
            return cb(AppResponse(false, null, 'User list not found'))
          })
        },
      ], (err, data) => {
        if (err) {
          return resolve(err)
        } else {
          return resolve(data);
        }
      })
    })
  }

  uploadImage(id: number, file): Promise<any> {
    const deleteFile = (name: string) => {
      fs.unlinkSync(path.join(__dirname, '..', path.sep, '..', path.sep, fileUploadDestination, path.sep, name))
    }
    return new Promise((resolve, reject) => {
      if (!id || !file) {
        return resolve(AppResponse(true, null, 'Please select valid image file'))
      }
      async.waterfall([
        (cb) => {
          this.userModel.findOne({
            where: {id}
          }).then(user => {
            console.log('user image', user.image)
            if (user.image) {
              let imagePath = path.join(__dirname, '..', path.sep, '..', path.sep, fileUploadDestination, path.sep,  user.image)
              console.log('imagePath', imagePath)
              if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath)
              }
            }
            return cb(null, user);
          }).catch(err => {
            return cb(AppResponse(false, null, 'Unable to change profile picture'))
          })
        },
        (user: Users, cb) => {
          user.image = file.filename

          user.save().then(userData => {
            return cb(null, AppResponse(true, userData, 'User profile pic changed'))
          }).catch(_ => {
            return cb(AppResponse(false, null, 'Unable to change profile picture'))
          })
        }
      ], (err, data) => {
        if (err && file && file.filename && file.destination) {
          deleteFile(file.filename)
        }
        return resolve(err ? err : data)
      })
    })
  }
}
