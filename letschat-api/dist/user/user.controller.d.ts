import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    register(data: any): Promise<any>;
    getProfile(req: any): Promise<any>;
    searchUser(req: any, q: any): Promise<any>;
    uploadProfilePicture(req: any, file: any): Promise<any>;
}
