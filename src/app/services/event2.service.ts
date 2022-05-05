import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Eventt } from '../models/Eventt';
import { EventServiceService } from './event-service.service';

@Injectable({
  providedIn: 'root'
})
export class Event2Service {

  private stat : any  ;
  eventSubject = new Subject<any[]>();

  private listevent:Eventt[] ; 

  constructor(private servi:EventServiceService) { 

    this.loadEvents();
    
  }


  loadEvents(){
    const myObserver = {
      next: x => {this.listevent = x;},
      error: err => console.error('Observer got an error: ' + err),
      complete: () => {
        console.log("ListEvent : ",this.listevent);
        this.emitEventSubject();
      },
    };
      this.servi.getAll().subscribe(
        myObserver
      );
     
   }

   emitEventSubject(){
    console.log("listEvent emit : ", this.listevent);
    this.eventSubject.next(this.listevent);
   }




   deleteEvent(i:number){
    let event = this.listevent.find(x=>x.idEvent===i);
      this.servi.deleteEventt(event.idEvent.toString()).subscribe(
      {
        next: x => {this.listevent = this.listevent.filter(emp=>emp.idEvent!=event.idEvent)},
        error: err => console.error('Observer got an error: ' + err),
        complete: () => {
          console.log("listFood : ",this.listevent);
          this.emitEventSubject();
        },
      }
    );
   

  }


  getEventById(index:number){

    return this.listevent.find(x=>x.idEvent===index);
}

getstat(i:number): any{
  let event = this.listevent.find(x=>x.idEvent===i) ;
  this.stat= this.servi.statEvent(event.idEvent).subscribe(
    (res)=>{
      this.stat=res
    }

  ) ;
  return console.log(this.stat)
  
  
}

updateEvent(editedEvent:Eventt){
  this.servi.putEvent(editedEvent).subscribe(
    {
      next: x => {},
      error: err => console.error('Observer got an error: ' + err),
      complete: () => {
        console.log("editedFood : ",editedEvent);
        this.emitEventSubject();
      },
    }
  );
}



affAllEvents(){   
  return this.listevent;
 }

//used in the search work
setEvents(evnet:Eventt[]){
  this.listevent = evnet;
  this.emitEventSubject();
}


addEvent(event:Eventt){
 
 this.servi.addEvent(event).subscribe(
  {
    next: x => { this.listevent = [event,...this.listevent]},
    error: err => console.error('Observer got an error: ' + err),
    complete: () => {
      console.log("listFood : ",this.listevent);
      this.emitEventSubject();
    },
  }
 );
} 




}
