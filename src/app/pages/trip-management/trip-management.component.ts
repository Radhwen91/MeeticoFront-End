import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileDB } from 'src/app/models/fileDB';
import { Trip } from 'src/app/models/trip';
import { TripService } from 'src/app/services/tripservices/trip.service';
import { ViewChild} from '@angular/core';;
import {MatSort, SortDirection} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import {FileDBTrip} from "../../models/FileDBTrip";
@Component({
  selector: 'app-trip-management',
  templateUrl: './trip-management.component.html',
  styleUrls: ['./trip-management.component.scss']
})
export class TripManagementComponent implements OnInit, AfterViewInit {

  listoftrips:Trip[];
  fileById:FileDBTrip[];
  imageSource:String;
  counters = [100, 200, 10];
  meilleurDestination:any;
  displayedColumns = ['image','destination', 'enddate', 'startdate', 'entrepreneur','object','option'];
  dataSource: MatTableDataSource<Trip>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private tripservice:TripService,private router:Router) { }
  ngAfterViewInit(): void {


  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  ngOnInit(): void {

    this.tripservice.getmeiulleurdestination().subscribe(
      data=>{
        console.log(data)
        this.meilleurDestination=data
      }
    );
    this.tripservice.getTrips().subscribe(
      data => {
        console.log('data',data);
        this.listoftrips = data;
        this.dataSource = new MatTableDataSource(this.listoftrips);
        this.dataSource._renderChangesSubscription;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;



        console.log(this.listoftrips)
        console.log(this.dataSource)

      }
    );

  }
  supprimer(trip :any){
    this.tripservice.deleteTrip(trip.idTrip).subscribe(()=>this.tripservice.getTrips().subscribe(
      data=>{
        this.listoftrips=data
        this.dataSource = new MatTableDataSource(this.listoftrips);
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
  }
  getimageurl(id:Number):String{
    var url="http://localhost:8081/FileTrip/files/"+id;
    window.open(url, "height=300,width=400");
      return url;
  }
  /*
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
                    this.imageSource="http://localhost:8081/File/files/"+f.id;
                  }
                }, 3000);
              });
             }

          }
        )
    return this.imageSource;
  }

  imagebyid(f:FileDB):String{


      this.counters.forEach(() => {
        setInterval(() => {
          this.counters[0]++;
          this.counters[1] = this.counters[1] + 10;
          this.counters[2] = this.counters[2] + 17;

          if (this.counters[0] + this.counters[1] + this.counters[2] > 500) {
            clearInterval();
            this.imageSource="http://localhost:8081/File/files/"+f.id;
          }
        }, 3000);
      });

return this.imageSource;
    }
    */

}
