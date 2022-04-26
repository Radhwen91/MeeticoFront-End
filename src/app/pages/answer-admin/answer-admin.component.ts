import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-answer-admin',
  templateUrl: './answer-admin.component.html',
  styleUrls: ['./answer-admin.component.scss']
})
export class AnswerAdminComponent implements OnInit {
  public answerForm: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private service:ReclamationService, private router:Router,
  private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.data); 
    this.initForm();
  }

  public updateReclamation(){
    this.service.answerAdmin(this.data).subscribe(
      ()=>this.router.navigateByUrl("/reclamation-management-admin")
        );
  }
  initForm() {
    this.answerForm = this.formBuilder.group({
      answer: ['',[ Validators.required,Validators.maxLength(50)]]
     
  });
  this.answerForm.valueChanges.subscribe(
    data=>{console.log(this.answerForm)}
  )}
    

}
