import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Eventt } from 'src/app/models/Eventt';
import { EventServiceService } from 'src/app/services/event-service.service';
import { Event2Service } from 'src/app/services/event2.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
event:Eventt 
id: number

  constructor(@Inject(MAT_DIALOG_DATA) public data: Eventt ,private  serv:EventServiceService, private router:Router,  private serviceRoute: ActivatedRoute , public dialog: MatDialog ) {
    this.event=data ;
   }

  ngOnInit(): void {
    this.event = new Eventt();
    this.id = this.serviceRoute.snapshot.params.id;
     this.serv.getById(+this.id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.event = res
      },
      error:(err)=>{console.log(err);
      }
    }); 
  }
  UpdateEvent(){  
    this.serv.putEvent(this.data ).subscribe({
      next:(res)=>{
        console.log(res);
        this.router.navigateByUrl("/event-management")
      },
      error:(err)=>{console.log(err);
      }
    }); 
   
  }



  
}
