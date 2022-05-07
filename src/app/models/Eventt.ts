import { FileDB } from "./fileDB";

export class Eventt {
  
    idEvent!: number;
    title!: string;
    description!: string;
    img!: string;
    location!: string;
    Eventkind!:string ;
    dateEvent!:Date;
    capacity!:number ;
    stat!: number ;

    files:FileDB[];
}