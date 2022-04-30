import { UpdateFeedbackComponent } from 'src/app/pages/update-feedback/update-feedback.component';
import { DetailFeedbackComponent } from './../detail-feedback/detail-feedback.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Feedback } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/services/feedback.service';



@Component({
  selector: 'app-feedback-management',
  templateUrl: './feedback-management.component.html',
  styleUrls: ['./feedback-management.component.scss'],
  providers: [NgbRatingConfig],
  styles: [`
  .star {
    font-size: 2rem;
    color: #b0c4de;
  }
  .filled {
    color: #1e90ff;
  }
  .bad {
    color: #deb0b0;
  }
  .filled.bad {
    color: #ff1e1e;
  }
`]
})

export class FeedbackManagementComponent implements OnInit {
 listFeedbacks:Feedback[];
// userid:number;
  
feedback:Feedback;
  start=0;
  end= 5;
  listFeedbacksPagination: Feedback[];
  search:string;
  
constructor(private feedbackservice:FeedbackService, private router:Router,config: NgbRatingConfig , public dialog: MatDialog) {
  this.feedback= new Feedback()
  config.max = 5;
  config.readonly = true;
 }
 public  deleteFeedbackById(idFeedback:number){
  let res= this.feedbackservice.deleteFeedbackById(idFeedback).subscribe(
    ()=>this.feedbackservice.getAllfeedbacks().subscribe(
      data => {
        console.log(data);
        this.listFeedbacks= data;
      })
    );
    
  }
  showDetail(f:Feedback){
    const dialogRef = this.dialog.open(DetailFeedbackComponent,
       {data:f}
    );
  
      dialogRef.afterClosed().subscribe(data => {
        console.log(`Dialog result: ${data}`);
      });
      }

      showupdate(f:Feedback){
        const dialogRef = this.dialog.open(UpdateFeedbackComponent,
           {data:f}
        );
      
          dialogRef.afterClosed().subscribe(data => {
            console.log(`Dialog result: ${data}`);
          });
          }







          
  paginate(event: PageEvent) {
    let startIndex = event.pageSize * event.pageIndex;
    this.start = startIndex;
    let endIndex = startIndex + event.pageSize;
    this.end = endIndex;
    if (endIndex > this.listFeedbacks.length) {
      endIndex = this.listFeedbacks.length;
    }
    this.listFeedbacksPagination = this.listFeedbacks.slice(startIndex, endIndex);
  }

  


  ngOnInit(): void {

    this.feedbackservice.getAllfeedbacks().subscribe(
      data => {
        console.log(data);
        this.listFeedbacks= data;
        this.listFeedbacksPagination=this.listFeedbacks.splice(0,5);
      }
      
    );
    
      
    




  }


  


}
