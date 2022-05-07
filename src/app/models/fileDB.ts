
import { Trip } from "./trip";
import {Publication} from './publication';
export class FileDB {
    id:number;
    name:String;
    type:String;
    data:Int32Array[];
    trip :Trip;
   publication :Publication;
}
    

