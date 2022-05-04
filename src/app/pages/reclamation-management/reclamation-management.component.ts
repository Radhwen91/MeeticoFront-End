import { AnswerAdminComponent } from './../answer-admin/answer-admin.component';
import { UpdateReclamationComponent } from './../update-reclamation/update-reclamation.component';
import { Reclamation } from './../../models/reclamation';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { DetailReclamationComponent } from '../detail-reclamation/detail-reclamation.component';

@Component({
  selector: 'app-reclamation-management',
  templateUrl: './reclamation-management.component.html',
  styleUrls: ['./reclamation-management.component.scss']
})

export class ReclamationManagementComponent implements OnInit {
listReclamations:Reclamation[];
listReclamationsPagination:Reclamation[];
search:string;
reclamation:Reclamation;
pecentage: Number;
nbrReclamationEnAttente:Number;

start = 0;
end = 5;

  
  constructor(private reclamationService:ReclamationService,public dialog: MatDialog) {
    this.reclamation= new Reclamation();
   }

   ngOnInit(): void {
    this.reclamationService.getAllReclamationByType().subscribe(
      data => {
        console.log(data);
        this.listReclamations = data;
        this.listReclamationsPagination=this.listReclamations.splice(0,5);
      }
    );

    this.reclamationService.statWatingReclamation().subscribe(
      data => {
        console.log(data);
        this.nbrReclamationEnAttente = data;
      }
    );
   
  }

   paginate(event: PageEvent) {
    let startIndex = event.pageSize * event.pageIndex;
    this.start = startIndex;
    let endIndex = startIndex + event.pageSize;
    this.end = endIndex;
    if (endIndex > this.listReclamations.length) {
      endIndex = this.listReclamations.length;
    }
    this.listReclamationsPagination = this.listReclamations.slice(startIndex, endIndex);
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
    


  public StatPercentageOfReclamationByPriorityOrByType(priority:String,type:String){
    if(type="" && priority!=null ){
      this.reclamationService.statReclamationByPriority(priority).subscribe(
        data => {
          console.log(data);
          this.pecentage = data;
        }
      );
    }else
    if(priority="" && type!=null  ){
      this.reclamationService.statReclamationByType(type).subscribe(
        data => {
          console.log(data);
          this.pecentage = data;
        }
      );
    }else
    this.reclamationService.statReclamationByTypeAndPriority(priority,type).subscribe(
      data => {
        console.log(data);
        this.pecentage = data;
      }
    );
    
  }




}

function YourDialog(YourDialog: any, arg1: { data: { name: string; }; }) {
  throw new Error('Function not implemented.');
}

