import { AnswerAdminComponent } from './../answer-admin/answer-admin.component';
import { UpdateReclamationComponent } from './../update-reclamation/update-reclamation.component';
import { Reclamation } from './../../models/reclamation';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ReclamationService } from 'src/app/services/reclamation.service';
import { DetailReclamationComponent } from '../detail-reclamation/detail-reclamation.component';

@Component({
  selector: 'app-reclamation-management',
  templateUrl: './reclamation-management.component.html',
  styleUrls: ['./reclamation-management.component.scss']
})

export class ReclamationManagementComponent implements OnInit {
listReclamations:Reclamation[];
reclamation:Reclamation;
  
  constructor(private reclamationService:ReclamationService,public dialog: MatDialog) {
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
    showDetail(r:Reclamation){
  const dialogRef = this.dialog.open(DetailReclamationComponent,
     {data:r}
  );

    dialogRef.afterClosed().subscribe(data => {
      console.log(`Dialog result: ${data}`);
    });
    }
 
    showUpdateReclamation(r:Reclamation){
      const dialogRef = this.dialog.open(UpdateReclamationComponent,
         {data:r}
        

      );
      console.warn('r',r);
    
        dialogRef.afterClosed().subscribe(data => {
          console.log(`Dialog result: ${data}`);
        });
        }

        showAnswerAdmin(r:Reclamation){
          const dialogRef = this.dialog.open(AnswerAdminComponent,
             {data:r}
          );
        
            dialogRef.afterClosed().subscribe(data => {
              console.log(`Dialog result: ${data}`);
            });
            }
    

            verifReclamation(reclamation:Reclamation){
              if( reclamation.type.toString()=="SOFTWARE"){
                return this.reclamationService.answerAdmin(reclamation);
              }else
              return this.showAnswerAdmin(reclamation);
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
function YourDialog(YourDialog: any, arg1: { data: { name: string; }; }) {
  throw new Error('Function not implemented.');
}

