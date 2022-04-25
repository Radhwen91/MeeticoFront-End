import { Component, OnInit } from '@angular/core';
import {PublicationService} from '../../../services/publication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Publication} from '../../../models/publication';
import {PostLike} from '../../../models/PostLike';
import {Comment} from '../../../models/comment';
import {FileDB} from '../../../models/fileDB';
import {HttpEventType, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {UpdatePublicationComponent} from './update-publication/update-publication.component';
import {MAT_SNACK_BAR_DATA, MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-front-publication',
  templateUrl: './front-publication.component.html',
  styleUrls: ['./front-publication.component.scss']
})
export class FrontPublicationComponent implements OnInit {
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
  constructor( private route : ActivatedRoute,private  snackBar: MatSnackBar,private publicationservice: PublicationService,private router: Router,public dialog: MatDialog) { }
  like : PostLike= new PostLike();
  fileById:FileDB[];
  comment : Comment= new Comment();
  public listComments:any
  public listCom:Comment[];
  nbrLike : number;
  public listnbrLike:number[];
  public listnbrdisike:number[];
  lang;
  changeLang(lang){
    localStorage.setItem('lang',lang);
    window.location.reload();
  }

  openSnackBar(message,action){
    let SnackBarRef = this.snackBar.open(message,action,{duration: 2000});
    SnackBarRef.afterDismissed().subscribe(()=>{
    });
    SnackBarRef.onAction().subscribe(()=>{


    });
  }

  /*
    getallprodinDep(){
      let idPublication =this.route.snapshot.paramMap.get('idPublication');
      this.publicationservice.ListComments(idPublication).subscribe(res=>{console.log(res);
        this.listComments=res
      });
    }*/

  idPub: number
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

        this.publicationservice.ListComments(1).subscribe(

          res2=>{
            // this.listCom.push(res2[i]);
            console.log("liscomenntssss"+this.listCom)
            //   console.log("liscomenntssss2"+res2)

          } );
        for(let i in this.listPub){


          this.publicationservice.getNbrLike(this.listPub[i].idPublication).subscribe(
            data=>{
              //console.log("nbrlikes",data)

              this.listnbrLike.push(data);
              // console.log(this.listnbrLike)

            }  );
          this.publicationservice.getNbrDislike(this.listPub[i].idPublication).subscribe(
            data2=>{
              //console.log("nbrlikes",data)

              this.listnbrdisike.push(data2);
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
  deletePub(publication:any){
    this.publicationservice.deletePub(publication.idPublication).subscribe(()=>this.publicationservice.getPubToday().subscribe(
      data=>{
        this.listPub=data

      } ) );}
  playSound(){
    let audio = new Audio()
    audio.src= "../assets/confirm2.mp3"
    audio.load();
    audio.play();
  }







  addPub(){
    this.publicationservice.addPublication(this.publication).subscribe(()=>this.publicationservice.getPubToday().subscribe(
        data=>{
        }


      )
    );


  }


  affecterImage(){
    this.publicationservice.affecter(1,2).subscribe(
      res=>{
      });
  }

  /*
  addPub(){
    this.publicationservice.addPublication(this.publication).subscribe(

        data=>{
          console.log(data)
          for(var f of this.listfile)
          {
            console.log('data',data);
            this.publicationservice.affecter(this.publication.idPublication,f.id,f).subscribe(
              res=>{

              });


          }
        }

    );
  }
*/

  addLike(id:number){
    this.publicationservice.addLike(this.like,id).subscribe(

      data=>{
        //console.log(res);

      }
    );
  }


  addComment2(publication:any){

    this.publicationservice.addComment2(this.comment,publication.idPublication).subscribe(
      data=>{
        this.router.navigate(["/frontpublication"])
      }
    );
  }


  addComment(){
    this.publicationservice.addComment(this.comment).subscribe(()=>this.router.navigateByUrl

    ( "frontpublication"));

  }

  GetNbrLike(id:number):number{
    this.publicationservice.getNbrLike(id).subscribe(

      data=>{
        console.log("dataaa",data)

        //   this.listnbrLike=data
        console.log("ttttt",this.listnbrLike)
        // console.log("/////////////"+this.nbrLike);
      }

    );
    return this.nbrLike
  }

  show=false;
  ChangeStatus(){
    this.show= !this.show;

  }
  upload() :FileDB[]{
    this.progress = 0;
    this.currentFile = this.selectedFiles.item(0);
    this.publicationservice.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.publicationservice.getFile2(event.body).subscribe(
            data=>{
              this.file=data;
              console.log('file',this.file)

              this.listfile.push(this.file);
              console.log(this.listfile)

            }
          );

        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
    this.selectedFiles = undefined;
    return this.listfile;
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  UpdatePublication(r:Publication){
    const dialogRef = this.dialog.open(UpdatePublicationComponent,
      {data:r}


    );
    console.warn('r',r);

    dialogRef.afterClosed().subscribe(data => {
      console.log(`Dialog result: ${data}`);
    });
  }








}
