import { Component, OnInit,ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Trip } from 'src/app/models/trip';
import { TripService } from 'src/app/services/tripservices/trip.service';



@Component({
  selector: 'app-acceuiltrip',
  templateUrl: './acceuiltrip.component.html',
  styleUrls: ['./acceuiltrip.component.scss']
})
export class AcceuiltripComponent implements OnInit {
  listoftrips:Trip[];
  listoftripsPagination :Trip[];
  start=0;
  end=5;
  constructor(private tripservice:TripService) { }

  ngOnInit(): void {
    this.tripservice.getTrips().subscribe(
      data => {
        console.log('data',data);
        this.listoftrips = data;
        this.listoftripsPagination=this.listoftrips
       
   
        
        
        
        
        
      }
    );
  }
  paginate(event: PageEvent) {
    let startIndex = event.pageSize * event.pageIndex;
    this.start = startIndex;
    let endIndex = startIndex + event.pageSize;
    this.end = endIndex;
    if (endIndex > this.listoftrips.length) {
      endIndex = this.listoftrips.length;
    }
    this.listoftripsPagination = this.listoftrips.slice(startIndex, endIndex);
  }

}
