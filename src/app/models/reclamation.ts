import { Priority } from "./reclamationPriority";
import { Type } from "./reclamationType";

export class Reclamation {
    idReclamation: Number;
    title: String;
    description:String;
    type:Type ;
    priority: Priority ;
    sendingDate: Date;
    lastModificationDate: Date;
    answerAdmin:String;
    answerDate:Date;
    status:Boolean;
    
}