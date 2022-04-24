import { UpdateFeedbackComponent } from 'src/app/pages/update-feedback/update-feedback.component';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/services/feedback.service';
import { DatailFeedbackComponent } from '../datail-feedback/datail-feedback.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-feedback-management-user',
  templateUrl: './feedback-management-user.component.html',
  styleUrls: ['./feedback-management-user.component.scss']
})
export class FeedbackManagementUserComponent implements OnInit {

  listFeedbacks:Feedback[];
  // userid:number;
    
  feedback:Feedback;
    start=0;
    end= 5;
    listFeedbacksPagination: Feedback[];
    search:string;

  constructor(private feedbackservice:FeedbackService, private router:Router ,public dialog: MatDialog) {
    this.feedback= new Feedback()
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
  
    
    showDetailfeedback(f:Feedback){
      console.log(`///////////////////////`);
      const dialogRef = this.dialog.open(DatailFeedbackComponent,
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
