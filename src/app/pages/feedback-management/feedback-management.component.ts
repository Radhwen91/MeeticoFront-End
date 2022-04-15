import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {

    this.feedbackservice.getAllfeedbacks().subscribe(
      data => {
        console.log(data);
        this.listFeedbacks= data;
      }
    );



  }


  


}
