import {Component, Inject, OnInit} from '@angular/core';
import {PublicationService} from "../../../../services/publication.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Publication} from "../../../../models/publication";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.scss']
})
export class ListCommentComponent implements OnInit {
  publication : Publication ;
  public listComments:Comment[];
  comment : Comment =new Comment();
  constructor(private publicationservice: PublicationService,@Inject(MAT_DIALOG_DATA) public data: Publication, private router:Router) {

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
  deleteComment(comment:any){
    this.publicationservice.deleteComment(comment.idComment).subscribe(()=>this.publicationservice.ListComments(this.data.idPublication).subscribe(
        data=>{
          this.listComments=data;
        }
      )
    );

  }
}
