import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { TripService } from 'src/app/services/tripservices/trip.service';
import { ViewChild} from '@angular/core';;
import {MatSort, SortDirection} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-algorithmedematching',
  templateUrl: './algorithmedematching.component.html',
  styleUrls: ['./algorithmedematching.component.scss']
})
export class AlgorithmedematchingComponent implements OnInit {

  public alghForm: FormGroup;
  listofusers:User[];
  counters = [100, 200, 10];
  displayedColumns = ['lastName','firstName', 'email', 'phoneNumber'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private tripservice:TripService) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm() {
    this.alghForm = new FormGroup({
        destination: new FormControl(),
        startDate: new FormControl(),
        city: new FormControl(),
    })
}
applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
  this.dataSource.filter = filterValue;
}
search(){

  this.tripservice.getUserssbymatching(this.alghForm.value.destination,this.alghForm.value.startDate,this.alghForm.value.city).subscribe(()=>this.tripservice.getUserssbymatching(this.alghForm.value.destination,this.alghForm.value.startDate,this.alghForm.value.city).subscribe(
    data=>{
      this.listofusers=data
      this.dataSource = new MatTableDataSource(this.listofusers);
      this.dataSource._renderChangesSubscription;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  ));
  }
}
