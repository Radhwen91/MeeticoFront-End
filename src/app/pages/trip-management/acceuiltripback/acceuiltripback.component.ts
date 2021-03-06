import { Component, OnInit } from '@angular/core';
import { SearchdialogComponent } from '../searchdialog/searchdialog.component';
import { ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Trip } from 'src/app/models/trip';
import { TripService } from 'src/app/services/tripservices/trip.service';

@Component({
  selector: 'app-acceuiltripback',
  templateUrl: './acceuiltripback.component.html',
  styleUrls: ['./acceuiltripback.component.scss']
})
export class AcceuiltripbackComponent implements OnInit {

  listoftrips:Trip[];
  listoftripsPagination :Trip[];
  listoftripsearch:Trip[]
  start=0;
  end=6;
  constructor(private tripservice:TripService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.tripservice.getTrips().subscribe(
      data => {
        console.log('data',data);
        this.listoftrips = data;
        this.listoftripsPagination=this.listoftrips.slice(this.start, this.end)

      }
    );
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.toUpperCase(); // Datasource defaults to lowercase matches
    this.tripservice.gettripbydestination(filterValue).subscribe(
      data=>{
        this.listoftripsearch=data;
        this.listoftripsPagination=this.listoftripsearch.slice(this.start, this.end)
      }
    )

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



  dialoggg(){
    const dialogRef = this.dialog.open(SearchdialogComponent, {
      data: {
          title: "NWAS NTD"
      },
      width: '600px',
      height: '600px',
      panelClass: 'epsSelectorPanel'
  });






    dialogRef.afterClosed().subscribe(data => {

    });

  }

}
