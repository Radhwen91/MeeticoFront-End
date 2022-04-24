import { Feedback } from './../../models/feedback';
import { FeedbackService } from './../../services/feedback.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Reclamation } from 'src/app/models/reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-update-feedback',
  templateUrl: './update-feedback.component.html',
  styleUrls: ['./update-feedback.component.scss']
})
export class UpdateFeedbackComponent implements OnInit {
feedback:Feedback;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Feedback,private service:FeedbackService, private router:Router) { 

    this.feedback=data;
    console.warn('datreclamationa',this.feedback)
  }

  ngOnInit(): void {
    console.log(this.data);
  }


  public updateFeedback(){
    this.service.updateReclamation(this.data).subscribe(
      ()=>this.router.navigateByUrl("/feedback-management-user")
        );
  }

}
