import { Component, OnInit } from '@angular/core';
import { ViewChild} from '@angular/core';;
import {MatSort, SortDirection} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { FileDB } from 'src/app/models/fileDB';
import { Trip } from 'src/app/models/trip';
import { User } from 'src/app/models/user';
import { TripService } from 'src/app/services/tripservices/trip.service';
import { ActivatedRoute } from '@angular/router';
import {FileTrip} from "../../../models/FileTrip";

@Component({
  selector: 'app-detailtripback',
  templateUrl: './detailtripback.component.html',
  styleUrls: ['./detailtripback.component.scss']
})
export class DetailtripbackComponent implements OnInit {

  id:Number;
  file:FileTrip;
  trip: Trip;
  users :User[];
  counters = [100, 200, 10];
  displayedColumns = ['lastName','firstName', 'email'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private tripservice:TripService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params.id;
    /*
    this.tripservice.getFilesdetail(this.router.snapshot.params.id).subscribe(
      data=>{
        console.log(data);
        this.file=data;
          }
    );*/
    this.tripservice.getTrip(this.router.snapshot.params.id).subscribe(
      res=>{
        console.log(res)
        this.trip=res;
        this.users=this.trip.users
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource._renderChangesSubscription;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  getimageurl(id:Number):String{
    var url="http://localhost:8081/FileTrip/files/"+id;
    window.open(url, "height=300,width=400");
      return url;
  }




}
