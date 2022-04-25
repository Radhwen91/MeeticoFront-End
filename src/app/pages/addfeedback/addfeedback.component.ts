import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/services/feedback.service';
type Rating = {
  value: number;
  max: number;
  color?: ThemePalette;
  disabled?: boolean;
  dense?: boolean;
  readonly?: boolean;
};
@Component({
  selector: 'app-addfeedback',
  templateUrl: './addfeedback.component.html',
  styleUrls: ['./addfeedback.component.scss']
})
export class AddfeedbackComponent implements OnInit {
feedback:Feedback;
public feedbackForm: FormGroup;
ratings: Rating[] = [
  {
    value: 1,
    max: 10,
    color: "primary"
  },
  {
    value: 2,
    max: 5,
    color: "accent"
  },
  {
    value: 3,
    max: 10,
    color: "warn"
  },
  {
    value: 4,
    max: 5
  },
  {
    value: 5,
    max: 10,
    disabled: true
  },
  {
    value: 1,
    max: 5,
    color: "primary",
    dense: true
  },
  {
    value: 2,
    max: 5,
    color: "accent",
    readonly: true
  }
];


  constructor(private feedbackservice :FeedbackService , private router:Router,
    private formBuilder: FormBuilder
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
    ()=>this.router.navigateByUrl("/feedback-management-user"));




    
  
}


}


  

