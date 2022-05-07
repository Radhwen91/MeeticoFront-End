import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Eventt } from 'src/app/models/Eventt';
import { userr } from 'src/app/models/userr';
import { EventServiceService } from 'src/app/services/event-service.service';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {
  @Input() eventt:Eventt;
  stat:Number;
  @Input() identifiant:number;
  @Output() notifstat = new EventEmitter<number>();
  user:userr[];
  events : any ; 

  constructor(private service: EventServiceService,     private _sanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {
    this.service.statEvent(this.eventt.idEvent).subscribe({
      next:(res:Number)=>{console.log("STAT"+res);
      this.stat =res
      },
      error:(err)=>{console.log(err);
        
      }
    }); 


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

      this.service.getById(this.eventt.idEvent).subscribe(
        (events:any[])=>{
          this.events = events;
          console.log("events from user card: ",this.events);
        }
      );
      
  }




   participateToEvent(id){
  this.service.partcipateUser(id).subscribe(
    {
      next:(res)=>{
        alert("add with succes")
        console.log(res);
        
      },
      error:(err)=>{
        alert("u r participated")
        console.log(err)
      }
    }
  )
  }

  convert(base64String) {
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String)
  }
}
