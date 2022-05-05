import { NotificationService } from './../../services/notification.service';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Reclamation } from 'src/app/models/reclamation';

@Component({
  selector: 'app-update-reclamation',
  templateUrl: './update-reclamation.component.html',
  styleUrls: ['./update-reclamation.component.scss']
})
export class UpdateReclamationComponent implements OnInit {

  reclamation:Reclamation;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Reclamation,
  private service:ReclamationService,
   private router:Router,
   private notificationservice:NotificationService) {
 this.reclamation=data;
console.warn('datreclamationa',this.reclamation)
   }

  

  ngOnInit(): void {
    console.log(this.data); 
  }

  public updateReclamation(){
    this.service.updateReclamation(this.data).subscribe(
      data=>{
        this.router.navigateByUrl("/reclamation-management")
        this.notificationservice.showSuccess("Reclamation has been modified successfully","Success")
      },error=>{
        this.notificationservice.showError("Reclamation is not edited","Error")
      }
      
        );
  }

}
