import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject, Subscription } from 'rxjs';
import { Eventt } from 'src/app/models/Eventt';
import { EventServiceService } from 'src/app/services/event-service.service';
import { Event2Service } from 'src/app/services/event2.service';
import { AddEventComponent } from './add-event/add-event.component';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.scss']
})
export class EventManagementComponent implements OnInit {
p: number ;
 eventSubscription : Subscription ;
  events:any ;

  listeven : any ; 
 
  constructor(private serv:EventServiceService,
              private _sanitizer: DomSanitizer ,
              private dg: MatDialog
    ) { }

  ngOnInit(): void {
   
     
this.refreshFeed() ;

      
    

}

convert(base64String) {
  return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String)
}

deleteEvent(id:number){
  
  this.serv.deleteEventt(id).subscribe({
    next:(res)=>{console.log(res);
      this.refreshFeed() ;
      //this.events =  this.events.filter((e)=>e.idEvent!=id)
    },
    error:(err)=>{console.log(err);
    }
  });
  

}

refreshFeed() {
  this.serv.getAll().subscribe(res => {
    this.listeven = res
    console.log(this.listeven)
  });
}




addEventDialog() {
  this.dg.open(AddEventComponent).afterClosed().subscribe(() => {
    this.refreshFeed();
  })
}









/*
supprimer(idEvent :any){
  this.serv.deleteEventt(idEvent).subscribe(()=>this.serv.getAll().subscribe(
    data=>{
      this.listeven=data
    }
  )
  );
}
*/


}
