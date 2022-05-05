import {User} from './user';
import {FileDB} from './fileDB';


export class Publication {
  idPublication: number;
  contents: string;
  date: Date;
  userr: User;
  files:FileDB[];
  onHover?:boolean;
  onHoverReact?:boolean;
  liked?:string;
  onComment?:boolean;
}
