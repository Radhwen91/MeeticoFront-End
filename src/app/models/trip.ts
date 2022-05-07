
import { User } from "./user";
import { FileDB } from "./fileDB";
import { FileTrip } from "./FileTrip";

export class Trip {
    idTrip: Number;
    destination: String;
    startDate: Date;
    endDate: Date;
    object: String;
    users:User[];
    user:User;
   
    files:FileTrip;

    
}