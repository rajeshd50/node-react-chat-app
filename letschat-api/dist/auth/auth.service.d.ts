import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import Session from '../database/model/session.entity';
export declare class AuthService {
    private readonly sessionModel;
    private readonly userService;
    private readonly jwtService;
    constructor(sessionModel: typeof Session, userService: UserService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    validateToken(token: string): Promise<boolean>;
    login(user: any): Promise<any>;
    logout(id: number): Promise<any>;
}
