import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileDB } from 'src/app/models/fileDB';
import { Trip } from 'src/app/models/trip';
import { TripService } from 'src/app/services/tripservices/trip.service';

@Component({
  selector: 'app-trip-management',
  templateUrl: './trip-management.component.html',
  styleUrls: ['./trip-management.component.scss']
})
export class TripManagementComponent implements OnInit {

  listoftrips:Trip[];
  fileById:FileDB[];
  imageSource:string;
  counters = [100, 200, 10];
  constructor(private tripservice:TripService,private router:Router) { }

  ngOnInit(): void {
    this.tripservice.getTrips().subscribe(
      data => {
        console.log('data',data);
        this.listoftrips = data;
        
      }
    );
  }
  supprimer(trip :any){
    this.tripservice.deleteTrip(trip.idTrip).subscribe(()=>this.tripservice.getTrips().subscribe(
      data=>{
        this.listoftrips=data
      }
    )
    );
  }
  get(trip :any):void{
    this.tripservice.getpdfbytrip(trip.idTrip).subscribe(
      data => {
        this.router.navigate(["/trip-management"])
      }
    );
  }/*
  imagebyid(id:Number):String{
      
        this.tripservice.getFiles(id).subscribe(
          data=>{
            this.fileById=data;
            for (var f of this.fileById) {
              var s;
              this.counters.forEach(() => {
                setInterval(() => {
                  this.counters[0]++;
                  this.counters[1] = this.counters[1] + 10;
                  this.counters[2] = this.counters[2] + 17;
                  
                  if (this.counters[0] + this.counters[1] + this.counters[2] > 500) {
                    clearInterval();
                    s="http://localhost:8089/SpringMVC/File/files/"+f.id;
                  }
                }, 3000);
              });
             }

          }
        )
    return s;
  }*/

  imagebyid(f:FileDB):String{
    
      
      this.counters.forEach(() => {
        setInterval(() => {
          this.counters[0]++;
          this.counters[1] = this.counters[1] + 10;
          this.counters[2] = this.counters[2] + 17;
          
          if (this.counters[0] + this.counters[1] + this.counters[2] > 500) {
            clearInterval();
            this.imageSource="http://localhost:8089/SpringMVC/File/files/"+f.id;
          }
        }, 3000);
      });
    
return this.imageSource;
    }
}
