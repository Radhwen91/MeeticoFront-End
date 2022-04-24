import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/services/feedback.service';



@Component({
  selector: 'app-feedback-management',
  templateUrl: './feedback-management.component.html',
  styleUrls: ['./feedback-management.component.scss']
})
export class FeedbackManagementComponent implements OnInit {
 listFeedbacks:Feedback[];
// userid:number;
  
feedback:Feedback;
  start=0;
  end= 5;
  listFeedbacksPagination: Feedback[];
  search:string;
constructor(private feedbackservice:FeedbackService, private router:Router ) {
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
