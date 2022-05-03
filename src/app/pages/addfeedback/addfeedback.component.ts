import { Trip } from './../../models/trip';
import { NotificationService } from './../../services/notification.service';
import { User } from './../../models/user';
import { UserService } from 'src/app/services/user.service';
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
public users:User[];
public trips:Trip[];
public trip:Trip;

  constructor(
    private feedbackservice :FeedbackService ,
    private userservice:UserService,
     private router:Router,
    private formBuilder: FormBuilder,
    private notificationservice:NotificationService
    ) { this.feedback = new Feedback()}




  ngOnInit(): void {
    this.initForm();
    this.getUsers();
    this.getTrips();
    console.log("+++++++++++++++"+this.users);
    console.log("+++++++++++++++"+this.feedback.users);
    console.log("+++++++++trips++++++"+this.trips);
  }

  public getTrips(){

    this.feedbackservice.getAllTrips().subscribe(
      data => {
        console.log(data);
        this.trips = data;
        console.log("+++++++++data trip++++++"+data);
      });
  }

  public getUsers(){
    this.userservice.retrieveAllUsers().subscribe(
      data => {
        console.log(data);
        this.users = data;
        
    
  });
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
    data=>{
      this.router.navigateByUrl("/feedback-management-user")
      this.notificationservice.showSuccess("Feedback has been sent","Success")}
    ,error=>{
      this.notificationservice.showError("Feedback is not send","Error")
    }
    
  );
  
}


}


  

