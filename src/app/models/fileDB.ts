import {Publication} from './publication';
import {Trip} from './trip';

export class FileDB {
  id:number;
  name:String;
  type:String;
  data:Int32Array[];
  publication :Publication;
}
