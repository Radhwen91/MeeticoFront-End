import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/trip';
import { TripService } from 'src/app/services/tripservices/trip.service';

@Component({
  selector: 'app-home-trip',
  templateUrl: './home-trip.component.html',
  styleUrls: ['./home-trip.component.scss']
})
export class HomeTripComponent implements OnInit {
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

}
