import { User } from "./user";
import { FileDB } from "./fileDB";

export class Trip {
    idTrip: Number;
    destination: String;
    startdate: Date;
    enddate: Date;
    object: String;
    users:User[];
    user:User;
   
    files:FileDB[];
    
}