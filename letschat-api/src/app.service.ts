import { Injectable } from '@nestjs/common';
import { AppResponse } from './_config/appResponse';

@Injectable()
export class AppService {
  healthCheck(): any {
    return AppResponse(true, null, 'Ok');
  }
}
