import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Eventt } from 'src/app/models/Eventt';
import { userr } from 'src/app/models/userr';
import { EventServiceService } from 'src/app/services/event-service.service';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() eventt:Eventt;
  @Input() position:number;
  @Output() notifdelete = new EventEmitter<number>();
  @Output() notifstat = new EventEmitter<number>();
  @Input() identifiant:number;
  statn : Eventt ;
  stat:Number;
  user:userr[];
  imagePath: any;
  events :any ; 
  constructor(
    private service: EventServiceService ,
    public dialog: MatDialog , 
    private _sanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {

    
    this.service.statEvent(this.eventt.idEvent).subscribe({
      next:(res:Number)=>{console.log("STAT"+res);
      this.stat =res
      },
      error:(err)=>{console.log(err);
        
      }
    }); 

    

    this.service.getById(this.eventt.idEvent).subscribe(
      (events:any[])=>{
        this.events = events;
        console.log("events from card: ",this.events);
      }
    );
    

this.service.userPerEvent().subscribe({
  next:(res)=>{console.log("My event"+res);
  
  },
  error:(err)=>{console.log(err);
    
  }
}); 
this.service.getMyUser(this.eventt.idEvent).subscribe({

next:(res:any[])=>
{ console.log("get my suer"+res) ;
this.user=res ;
},
error:(err)=>{console.log(err)} 

}) ;

  }

  convert(base64String) {
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String)
  }



  deleteEvent(){
    this.notifdelete.emit(this.identifiant);
  }
  participateToEvent(id){
  this.service.partcipateUser(id).subscribe(
    {
      next:(res)=>{
        console.log(res);
        
      },
      error:(err)=>{
        console.log(err)
      }
    }
  )
  }


  showDetail(e:Eventt){
    const dialogRef = this.dialog.open(UpdateComponent,
       {data:e}
    );
  
      dialogRef.afterClosed().subscribe(data => {
        console.log(`Dialog result: ${data}`);

      });
      }



   
  
 
  userParicipated(id){
    this.service.getMyUser(id).subscribe({

  next:(res:any[])=>
  { console.log("get my suer"+res) ;
  this.user=res ;
  console.log("get my user"+this.user)
  },
  error:(err)=>{console.log(err)} 
  
  })
  


  }

}
