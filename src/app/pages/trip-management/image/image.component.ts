import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { TripService } from 'src/app/services/tripservices/trip.service';
import { FileDB } from 'src/app/models/fileDB';
import { Trip } from 'src/app/models/trip';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  id:Number;
  file:FileDB;
  trip: Trip;
  constructor(private tripservice:TripService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params.id;
    this.tripservice.getFilesdetail(this.router.snapshot.params.id).subscribe(
      data=>{
        console.log(data);
        this.file=data;
          }
    );
    this.tripservice.getTripbyFile(this.router.snapshot.params.id).subscribe(
      res=>{
        console.log(res)
        this.trip=res;
      }
    )
  }
  getimageurl(id:Number):String{
    var url="http://localhost:8089/SpringMVC/File/files/"+id;
    window.open(url, "height=300,width=400");
      return url;
  }

  

    
  

  }
