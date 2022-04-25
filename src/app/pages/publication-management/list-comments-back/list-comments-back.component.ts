import {Component, Inject, OnInit} from '@angular/core';
import {PublicationService} from '../../../services/publication.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Publication} from '../../../models/publication';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-comments-back',
  templateUrl: './list-comments-back.component.html',
  styleUrls: ['./list-comments-back.component.scss']
})
export class ListCommentsBackComponent implements OnInit {
  publication : Publication ;
  public listComments:Comment[];
  comment : Comment =new Comment();

  constructor(private  snackBar: MatSnackBar,private publicationservice: PublicationService,@Inject(MAT_DIALOG_DATA) public data: Publication, private router:Router) {

    this.publication=data;

  }

  ngOnInit(): void {
    this.publicationservice.ListComments(this.data.idPublication).subscribe(
      res=>{
        console.log(res);
        this.listComments=res;

      }
    );

  }
  openSnackBar(message,action){

    let SnackBarRef = this.snackBar.open(message,action,{duration: 2000});
    SnackBarRef.afterDismissed().subscribe(()=>{


    });
    SnackBarRef.onAction().subscribe(()=>{


    });
  }

  deleteComment(comment:any){
    this.publicationservice.deleteComment(comment.idComment).subscribe(()=>this.publicationservice.ListComments(this.data.idPublication).subscribe(
        data=>{
          this.listComments=data;
        }
      )
    );

  }





}
