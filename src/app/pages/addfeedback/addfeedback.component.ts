import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-addfeedback',
  templateUrl: './addfeedback.component.html',
  styleUrls: ['./addfeedback.component.scss']
})
export class AddfeedbackComponent implements OnInit {
feedback:Feedback;
  constructor(private feedbackservice :FeedbackService , private router:Router) { this.feedback = new Feedback()}

  ngOnInit(): void {
  }

addFeedback(){
  this.feedbackservice.addFeedback(this.feedback).subscribe(
    ()=>this.router.navigateByUrl("/feedback-management"));




    
  
}


}
