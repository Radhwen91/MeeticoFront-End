import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trip } from 'src/app/models/trip';
import { TripService } from 'src/app/services/tripservices/trip.service';

@Component({
  selector: 'app-trip-management',
  templateUrl: './trip-management.component.html',
  styleUrls: ['./trip-management.component.scss']
})
export class TripManagementComponent implements OnInit {

  listoftrips:Trip[];
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
  get(trip :any){
    this.tripservice.getpdfbytrip(trip.idTrip).subscribe(
      data => {
        this.router.navigate(["/trip-management"])
      }
    );
  }

}
