import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Eventt } from 'src/app/models/Eventt';
import { EventServiceService } from 'src/app/services/event-service.service';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.scss']
})
export class ShowEventComponent implements OnInit {
  eventSubscription : Subscription ;
  events:Eventt[] ;
  p: number ;

  constructor(private serv:EventServiceService) { }

  ngOnInit(): void {
    this.eventSubscription = this.serv.getAll().subscribe(
      (events:Eventt[])=>{
        this.events = events;
        console.log("this.events : ",this.events);
      }
    );
  }

}
