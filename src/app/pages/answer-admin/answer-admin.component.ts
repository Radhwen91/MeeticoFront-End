import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-answer-admin',
  templateUrl: './answer-admin.component.html',
  styleUrls: ['./answer-admin.component.scss']
})
export class AnswerAdminComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private service:ReclamationService, private router:Router) { }

  ngOnInit(): void {
    console.log(this.data); 
  }

  public updateReclamation(){
    this.service.answerAdmin(this.data).subscribe(
      ()=>this.router.navigateByUrl("/reclamation-management-admin")
        );
  }

}
