import { NotificationService } from './../../services/notification.service';
import { Feedback } from './../../models/feedback';
import { FeedbackService } from './../../services/feedback.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-feedback',
  templateUrl: './update-feedback.component.html',
  styleUrls: ['./update-feedback.component.scss']
})
export class UpdateFeedbackComponent implements OnInit {
feedback:Feedback;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private service:FeedbackService,
  private router:Router,
  private notificationservice:NotificationService) { 

    this.feedback=data;
    console.warn('datreclamationa',this.feedback)
  }

  ngOnInit(): void {
    console.log(this.data);
  }


  public updateFeedback(){
    this.service.updateFeedback(this.data).subscribe(
      data=>{
        this.router.navigateByUrl("/feedback-management-user")
        this.notificationservice.showSuccess("Feedback has been modified successfully","Success")
      },error=>{
        this.notificationservice.showError("Feedback is not edited","Error")
      }
      
        );
  }

}
