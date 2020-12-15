import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';


@Injectable()
export class JwtSessionGuard implements CanActivate {
  constructor(
    private authService: AuthService,
  ) {}
  /**
   * verify token from db session table
   */
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    let authString = request.headers.authorization;
    let tokens = authString ? authString.split(' ') : []

    return new Promise((resolve, reject) => {
      if (tokens && tokens.length == 2) {
        this.authService.validateToken(tokens[1]).then(isSuccess => {
          if (isSuccess) {
            return resolve(true)
          } else {
            throw new HttpException('Session Expired', HttpStatus.UNAUTHORIZED)
            return reject(false)
          }
        }).catch(e => {
          return resolve(false)
        })
      } else {
        return resolve(false)
      }
    })
  }
}