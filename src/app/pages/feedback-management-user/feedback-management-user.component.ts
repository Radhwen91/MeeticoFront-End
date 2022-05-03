import { NotificationService } from './../../services/notification.service';
import { DetailFeedbackUserComponent } from './../detail-feedback-user/detail-feedback-user.component';
import { UpdateFeedbackComponent } from 'src/app/pages/update-feedback/update-feedback.component';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/services/feedback.service';

import { MatDialog } from '@angular/material/dialog';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-feedback-management-user',
  templateUrl: './feedback-management-user.component.html',
  styleUrls: ['./feedback-management-user.component.scss'],
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
export class FeedbackManagementUserComponent implements OnInit {

  listFeedbacks:Feedback[];
  // userid:number;
    
  feedback:Feedback;
    start=0;
    end= 5;
    listFeedbacksPagination: Feedback[];
    search:string;

  constructor(private feedbackservice:FeedbackService,
     private router:Router ,
     public dialog: MatDialog ,
     config: NgbRatingConfig,
     private notificationservice:NotificationService) {
    this.feedback= new Feedback();
    config.max = 5;
    config.readonly = true;
   }
   public  deleteFeedbackById(idFeedback:number){
    let res= this.feedbackservice.deleteFeedbackById(idFeedback).subscribe(
      data=>{
      this.feedbackservice.getAllfeedbacks().subscribe(
        data => {
          console.log(data);
          this.listFeedbacks= data;
        })
        this.notificationservice.showSuccess("Feedback has been removed","Success")
      },
      error=>{
        this.notificationservice.showError("Feedback is not deleted","Error")
      }
      );
      
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
  
    
    showDetail(f:Feedback){
      const dialogRef = this.dialog.open(DetailFeedbackUserComponent,
         {data:f}
      );
    
        dialogRef.afterClosed().subscribe(data => {
          console.log(`Dialog result: ${data}`);
        });
        }

      showUpdateFeedback(f:Feedback){
        console.log(`///////////////////////`);
        const dialogRef = this.dialog.open(UpdateFeedbackComponent,
           {data:f}
           
        );
        
          dialogRef.afterClosed().subscribe(data => {
            console.log(`Dialog result: ${data}`);
          });
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
