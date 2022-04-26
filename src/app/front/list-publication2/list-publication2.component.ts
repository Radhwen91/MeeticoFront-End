import { Component, OnInit } from '@angular/core';
import {Publication} from "../../models/publication";
import {PublicationService} from "../../services/publication.service";
import {FileDB} from "../../models/fileDB";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {PostLike} from "../../models/PostLike";
import {Comment} from "../../models/comment";
import {
  ListCommentComponent
} from "../../pages/publication-management/front-publication/list-comment/list-comment.component";

@Component({
  selector: 'app-list-publication2',
  templateUrl: './list-publication2.component.html',
  styleUrls: ['./list-publication2.component.scss']
})
export class ListPublication2Component implements OnInit {
  public listPub:Publication[];
  listfile:FileDB[];
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  fileInfos: Observable<any>;
  file: FileDB;
  publication : Publication =new Publication();
  id:Number;
  idf:Number;
  like : PostLike= new PostLike();
  fileById:FileDB[];
  comment : Comment= new Comment();
  public listComments:any
  public listCom:Comment[];
  nbrLike : number;
  public listnbrLike:number[];
  public listnbrdisike:number[];
  lang;
  constructor( private route : ActivatedRoute,private publicationservice: PublicationService,private router: Router,public dialog: MatDialog) { }

  ListComments(r:Publication){
    const dialogRef = this.dialog.open(ListCommentComponent,
      {data:r}


    );
    console.warn('r',r);

    dialogRef.afterClosed().subscribe(data => {
      console.log(`Dialog result: ${data}`);
    });
  }



  onhover(post) {
    // this.ishover = true;
    // this.ishoverReact = true;
    post.onHover=true;
    post.onHoverReact=true;
  }

  onleave(post) {
    // this.ishover = false;
    post.onHover=false;


  }
  onleaveReact(post) {
    // this.ishoverReact = false;
    post.onHoverReact=false;

  }

  togglecomment(post) {
    // this.currentPost = post;
    post.onComment=!post.onComment;
    // this.oncomment = !this.oncomment;
  }
  ngOnInit(): void {
    this.lang=localStorage.getItem('lang') || 'en';
    /* const headers = new HttpHeaders({
       'Accept-Language': this.lang
     });*/
    this.listfile=[];
    this.listnbrLike=[];
    this.publicationservice.getPubToday().subscribe(

      res=>{
        console.log(res);
        this.listPub=res;
        let id: Publication =res.idPublication;
    /*    this.publicationservice.ListComments(1).subscribe(

          res2=>{
            // this.listCom=res;
            console.log("liscomenntssss"+this.listCom)
            //   console.log("liscomenntssss2"+res2)

          } );
*/
        for(let i in this.listPub){


          this.publicationservice.getNbrLike(this.listPub[i].idPublication).subscribe(
            data=>{
              //console.log("nbrlikes",data)

              this.listnbrLike.push(data);
              // console.log(this.listnbrLike)

            }  );
          this.publicationservice.getNbrDislike(this.listPub[i].idPublication).subscribe(
            data=>{
              //console.log("nbrlikes",data)

              this.listnbrdisike.push(data);
              // console.log(this.listnbrLike)

            }  );



        }


      });


    /*
        this.publicationservice.ListComments(1).subscribe(
          res2=>{
            console.log("dataaaa",res2);
            this.listComments=res2;
          } );

          */



  }

}
