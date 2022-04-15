import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { TripService } from 'src/app/services/tripservices/trip.service';

@Component({
  selector: 'app-algorithmedematching',
  templateUrl: './algorithmedematching.component.html',
  styleUrls: ['./algorithmedematching.component.scss']
})
export class AlgorithmedematchingComponent implements OnInit {

  public alghForm: FormGroup;
  listofusers:User[];
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
search(){

  this.tripservice.getUserssbymatching(this.alghForm.value.destination,this.alghForm.value.startDate,this.alghForm.value.city).subscribe(()=>this.tripservice.getUserssbymatching(this.alghForm.value.destination,this.alghForm.value.startDate,this.alghForm.value.city).subscribe(
    data=>{
      this.listofusers=data
    }
  ));
  }
}
