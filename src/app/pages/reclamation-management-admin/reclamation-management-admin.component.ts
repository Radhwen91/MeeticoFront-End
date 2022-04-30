import { PusherService } from './../../services/websocket/pusher.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Reclamation } from 'src/app/models/reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { AnswerAdminComponent } from '../answer-admin/answer-admin.component';
import { DetailReclamationComponent } from '../detail-reclamation/detail-reclamation.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reclamation-management-admin',
  templateUrl: './reclamation-management-admin.component.html',
  styleUrls: ['./reclamation-management-admin.component.scss']
})


export class ReclamationManagementAdminComponent implements OnInit {
 listReclamations:Reclamation[];
listReclamationsPagination:Reclamation[];
search:string;
reclamation:Reclamation;
pecentage: Number;
nbrReclamationEnAttente:Number;
start = 0;
end = 5;

  

  constructor(private reclamationService:ReclamationService ,public dialog: MatDialog,private pusherService:PusherService) {
    this.reclamation= new Reclamation();
   }

   ngOnInit(): void {
    this.reclamationService.getAllReclamationAdmin().subscribe(
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

   // this.pusherService.channel.bind('Notification', (data: any)=>{});
   
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
                return this.alertConfirmation(reclamation);
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

  alertConfirmation(reclamation:Reclamation) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        this.reclamationService.verifBySendingEmail(reclamation);
        console.log(`reclamation ${JSON.stringify(reclamation)}`)
        Swal.fire('send Email !', 'Email sended successfully.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', ' Email is still not sent.)', 'error');
      }
    });
  }


}


