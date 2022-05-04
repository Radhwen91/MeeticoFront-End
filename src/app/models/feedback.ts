import { User } from './user';
export class Feedback {
    idFeedback : number;
    title : string;
    description : string;
    sendingDate : Date;
    lastModificationDate : Date;
    stars : number;
    users: User[];
    }