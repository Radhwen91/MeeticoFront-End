import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/services/feedback.service';
@Component({
  selector: 'app-addfeedback',
  templateUrl: './addfeedback.component.html',
  styleUrls: ['./addfeedback.component.scss'],
 

})
export class AddfeedbackComponent implements OnInit {
feedback:Feedback;
public feedbackForm: FormGroup;



  constructor(private feedbackservice :FeedbackService , private router:Router,
    private formBuilder: FormBuilder,
    ) { this.feedback = new Feedback()}

  ngOnInit(): void {
    this.initForm()
  }
  
  

  initForm() {
    this.feedbackForm = this.formBuilder.group({
      title: ['',[ Validators.required,Validators.maxLength(50)]],
      description: ['',[ Validators.required,Validators.maxLength(4000)]],
      stars: ['', Validators.required],
      
  });
  this.feedbackForm.valueChanges.subscribe(
    data=>{console.log(this.feedbackForm)}
  )}
  onReset(): void {
   
    this.feedbackForm.reset();
  }
  
addFeedback(){
  this.feedbackservice.addFeedback(this.feedback).subscribe(
    
    ()=>this.router.navigateByUrl("/feedback-management-user")
  );
  
}


}


  

