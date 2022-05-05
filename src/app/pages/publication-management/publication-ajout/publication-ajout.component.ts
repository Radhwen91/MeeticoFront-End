import { Component, OnInit } from '@angular/core';
import {Publication} from '../../../models/publication';
import {PublicationService} from '../../../services/publication.service';
import {Router} from '@angular/router';
import {PostLike} from '../../../models/PostLike';
import {Comment} from '../../../models/comment';
import {FileDB} from '../../../models/fileDB';
import {Observable} from 'rxjs';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ToastrService} from "ngx-toastr";
@Component({
  selector: 'app-publication-ajout',
  templateUrl: './publication-ajout.component.html',
  styleUrls: ['./publication-ajout.component.scss']
})
export class PublicationAjoutComponent implements OnInit {
  public listPub:any;
  public listCom:any;
  listfile:FileDB[];
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  fileInfos: Observable<any>;
  file: FileDB;
  constructor(private toastr : ToastrService,private  snackBar: MatSnackBar,private publicationservice: PublicationService,private router: Router) { }

  ngOnInit(): void {
  }
  showToatr(){
    this.toastr.success('Post added Succesfully ','Post added Succesfully');
  }


  publication : Publication= new Publication();
  comment : Comment= new Comment();
  like : PostLike= new PostLike();
  openSnackBar(message,action){

    let SnackBarRef = this.snackBar.open(message,action,{duration: 2000});
    SnackBarRef.afterDismissed().subscribe(()=>{


    });
    SnackBarRef.onAction().subscribe(()=>{


    });
  }
  playSound(){
    let audio = new Audio()
    audio.src= "../assets/confirm2.mp3"
    audio.load();
    audio.play();
  }

  addPub(){
    this.publicationservice.addPublication(this.publication).subscribe(()=>this.publicationservice.getPubToday().subscribe(

        data=>{
          this.listPub=data
          console.log('dataaaaa',data)


        }
      )
    );

  }










}
