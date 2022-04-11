import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/trip';
import { TripService } from 'src/app/services/tripservices/trip.service';

@Component({
  selector: 'app-trip-management',
  templateUrl: './trip-management.component.html',
  styleUrls: ['./trip-management.component.scss']
})
export class TripManagementComponent implements OnInit {

  listoftrips:Trip[];
  constructor(private tripservice:TripService) { }

  ngOnInit(): void {
    this.tripservice.getTrips().subscribe(
      data => {
        console.log('data',data);
        this.listoftrips = data;
      }
    );
  }
  supprimer(trip :any){
    this.tripservice.deleteTrip(trip.idTrip).subscribe(
      data => {
       
      }
    );
  }

}
