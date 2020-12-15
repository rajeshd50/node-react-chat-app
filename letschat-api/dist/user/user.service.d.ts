import { Sequelize } from 'sequelize-typescript';
import Users from '../database/model/user.entity';
import { CreateUserDto } from './dto/createUser.dto';
import { AuthService } from 'src/auth/auth.service';
export declare class UserService {
    private authService;
    private readonly userModel;
    private readonly sequelize;
    constructor(authService: AuthService, userModel: typeof Users, sequelize: Sequelize);
    create(createUserDto: CreateUserDto): Promise<any>;
    findOne(email: string): Promise<Users | undefined>;
    getUserDetails(id: number): Promise<any>;
    searchUser(userId: number, text: string): Promise<any>;
    uploadImage(id: number, file: any): Promise<any>;
}
