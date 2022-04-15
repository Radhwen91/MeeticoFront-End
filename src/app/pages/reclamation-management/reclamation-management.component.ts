import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/app/models/reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-reclamation-management',
  templateUrl: './reclamation-management.component.html',
  styleUrls: ['./reclamation-management.component.scss']
})

export class ReclamationManagementComponent implements OnInit {
listReclamations:Reclamation[];
reclamation:Reclamation;
  constructor(private reclamationService:ReclamationService) {
    this.reclamation= new Reclamation();
   }



  public  deleteReclamationById(idReclamation:number){
    let res= this.reclamationService.deleteReclamartionById(idReclamation).subscribe(
      ()=>this.reclamationService.getAllReclamationByType().subscribe(
        data => {
          console.log(data);
          this.listReclamations = data;
        })
      );
    }
   
    public retriveReclamation(idReclamation:number){
      this.reclamationService.retriveReclamationById(idReclamation).subscribe(
        (res)=>{
          this.reclamation=res;
        }

      );
      
    }

    
    
  ngOnInit(): void {
    this.reclamationService.getAllReclamationByType().subscribe(
      data => {
        console.log(data);
        this.listReclamations = data;
      }
    );


   
  }

}
