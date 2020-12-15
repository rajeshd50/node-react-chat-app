import { MessageService } from './message.service';
export declare class MessageController {
    private messageService;
    constructor(messageService: MessageService);
    sendMessage(req: any, data: any): Promise<any>;
    getFriendList(req: any): Promise<any>;
    getMessageList(req: any, q: any): Promise<any>;
}
