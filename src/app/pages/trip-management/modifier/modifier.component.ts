import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FileDB } from 'src/app/models/fileDB';
import { Trip } from 'src/app/models/trip';
import { User } from 'src/app/models/user';
import { TripService } from 'src/app/services/tripservices/trip.service';

@Component({
  selector: 'app-ajouter-trip',
  templateUrl: './modifiercomponent.html',
  styleUrls: ['./modifier.component.scss']
})
export class ModifierComponent implements OnInit,AfterContentInit {

  trip:Trip;
  public tripForm: FormGroup;
  listofusers:User[];
  
  constructor(private tripservice:TripService,private router:ActivatedRoute,private route :Router) { }
  ngAfterContentInit(): void {
    this.get(this.router.snapshot.params.id)
  }

  ngOnInit(): void {
    
    this.tripservice.getUserss().subscribe(
      data => {
        console.log('data',data);
        this.listofusers = data;
      }
    );
  
    
  }
  initForm(data) {
    this.tripForm = new FormGroup({
        destination: new FormControl(data?.destination),
        startDate: new FormControl(data?.startDate),
        endDate: new FormControl(data?.endDate),
        object: new FormControl(data?.object),
    })
}
get(id:number){
  this.tripservice.getTrip(id ).subscribe(
    data => {
      
      this.trip = data;
    this.initForm(data)

    }
  );
}

modifier(){

this.tripservice.updateTrip(this.router.snapshot.params.id,this.tripForm.value).subscribe(
  data=>{
    this.route.navigate(["/trip-management"])
  }
);
}
affecter(user :any){
  this.tripservice.affectusertrip(this.router.snapshot.params.id,user.userId,this.tripForm.value).subscribe(()=>this.tripservice.getUserss().subscribe(
    data=>{
      this.listofusers=data
    }
  ));
  
}
desaffecter(user :any){
  this.tripservice.desaffeteraffectusertrip(this.router.snapshot.params.id,user.userId,this.tripForm.value).subscribe(()=>this.tripservice.getUserss().subscribe(
    data=>{
      this.listofusers=data
    }
  ));
  
}


}
