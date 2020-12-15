import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import Friends from 'src/database/model/friends.entity';
import Message from 'src/database/model/message.entity';
import { AppResponse } from 'src/_config/appResponse';
import { CreateMessageDto } from './dto/CreateMessage.dto';

import async from 'async'
import moment from 'moment'
import { Op } from 'sequelize';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message)
    private readonly messageModel: typeof Message,
    @InjectModel(Friends)
    private readonly friendsModel: typeof Friends,
    private readonly sequelize: Sequelize,
  ) {}

  async createMessage(data: CreateMessageDto): Promise<any> {
    return new Promise((resolve, reject) => {
      async.waterfall([
        (cb) => {
          if (!data || !data.text) {
            return cb(AppResponse(false, null, 'Message required'));
          }
          if (!data || !data.senderId) {
            return cb(AppResponse(false, null, 'Sender required'));
          }
          if (!data || !data.receiverId) {
            return cb(AppResponse(false, null, 'Receiver required'));
          }
          if (data.receiverId == data.senderId) {
            return cb(AppResponse(false, null, 'Receiver and sender cant be same'));
          }
          return cb(null)
        },
        /**
         * save message
         */
        (cb) => {
          let msg = new Message()
          msg.text = data.text;
          msg.senderId = data.senderId;
          msg.receiverId = data.receiverId;
          msg.save().then(msgObj => {
            console.log('message created', msgObj.toJSON())
            return cb(null, msgObj)
          }).catch(err => {
            console.log('error while saving',err)
            return cb(AppResponse(false, null, 'Unable to save message'))
          })
        },
        /**
         * update sender friend list
         */
        (msg: Message, cb) => {
          this.friendsModel.findOne({
            where: {
              userId: msg.senderId,
              friendId: msg.receiverId,
            }
          }).then(found => {
            if (found) {
              return cb(null, msg)
            } else {
              let frnd = new Friends()
              frnd.userId = msg.senderId;
              frnd.friendId = msg.receiverId;
              frnd.last_message_time = msg.createdAt;

              frnd.save().then(saved => {
                return cb(null, msg)
              }).catch(err => {
                return cb(AppResponse(false, null, 'Message sent but friend list not updated'))
              })
            }
          }).catch(err => {
            return cb(AppResponse(false, null, 'Message sent but friend list not updated'))
          });
        },
        /**
         * update receiver friend list
         */
        (msg: Message, cb) => {
          this.friendsModel.findOne({
            where: {
              userId: msg.receiverId,
              friendId: msg.senderId,
            }
          }).then(found => {
            if (found) {
              return cb(null, msg)
            } else {
              let frnd = new Friends()
              frnd.userId = msg.receiverId;
              frnd.friendId = msg.senderId;
              frnd.last_message_time = msg.createdAt;

              frnd.save().then(saved => {
                return cb(null, msg)
              }).catch(err => {
                return cb(AppResponse(false, null, 'Message sent but friend list not updated'))
              })
            }
          }).catch(err => {
            return cb(AppResponse(false, null, 'Message sent but friend list not updated'))
          });
        },
        /**
         * send final response
         */
        (msg: Message, cb) => {
          this.messageModel.findOne({
            where: {id: msg.id},
            include: [{all: true}],
          }).then(message => {
            return cb(null, AppResponse(true, message.toJSON(), 'Message sent'))
          }).catch(err => {
            console.log('error while saving6',err)
            return cb(null, AppResponse(true, msg.toJSON(), 'Message sent'))
          })
        }
      ], (err, data) => {
        if (err) {
          return resolve(err)
        } else {
          return resolve(data)
        }
      })
    })
  }

  async friendList(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.friendsModel.findAll({
        where: {
          userId: id,
        },
        include: [{all: true}],
        order: [
          ['last_message_time', 'DESC']
        ]
      }).then(friends => {
        return resolve(AppResponse(true, friends.map(x => x.toJSON()), 'Friend list'))
      }).catch(err => {
        return resolve(AppResponse(false, null, 'Unable to fetch friend list'))
      })
    })
  }

  async messageList(id: number, user: number, limit: number = 100, offset: number = 0): Promise<any> {
    return new Promise((resolve, reject) => {
      async.waterfall([
        (cb) => {
          this.messageModel.count({
            where: {
              [Op.and]: [{
                [Op.or]: [{
                  senderId: id,
                }, {
                  receiverId: id,
                }],
              }, {
                [Op.or]: [{
                  senderId: user,
                }, {
                  receiverId: user,
                }]
              }],
            },
          }).then(total => {
            return cb(null, total)
          }).catch(err => {
            return cb(AppResponse(false, null, 'Unable to fetch message list'))
          })
        },
        (total, cb) => {
          this.messageModel.findAll({
            where: {
              [Op.and]: [{
                [Op.or]: [{
                  senderId: id,
                }, {
                  receiverId: id,
                }],
              }, {
                [Op.or]: [{
                  senderId: user,
                }, {
                  receiverId: user,
                }]
              }],
            },
            include: [{all: true}],
            order: [
              ['createdAt', 'DESC']
            ],
            limit,
            offset, 
          }).then(messages => {
            return cb(null, AppResponse(true, {
              total,
              limit,
              offset,
              messages: messages.map(x => x.toJSON())
            }, 'Message list'))
          }).catch(err => {
            return cb(AppResponse(false, null, 'Unable to fetch message list'))
          })
        }
      ], (err, data) => {
        if (err) {
          return resolve(err)
        } else {
          return resolve(data);
        }
      })
    })
  }
}
