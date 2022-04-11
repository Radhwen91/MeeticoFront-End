import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Trip } from 'src/app/models/trip';
import { TripService } from 'src/app/services/tripservices/trip.service';

@Component({
  selector: 'app-ajouterModifier-trip',
  templateUrl: './ajouterModifier.component.html',
  styleUrls: ['./ajouterModifier.component.scss']
})
export class AjouterModifierComponent implements OnInit {

  public tripForm: FormGroup;
  constructor(private tripservice:TripService,private router:Router) { }

  ngOnInit(): void {
    this.initForm()
    
  }
  initForm() {
    this.tripForm = new FormGroup({
        destination: new FormControl(),
        startDate: new FormControl(),
        endDate: new FormControl(),
        object: new FormControl(),
    })
}
ajouter(){
console.log(this.tripForm.value);
this.tripservice.ajoutTrip(this.tripForm.value,1).subscribe(
  data=>{
    this.router.navigate(["/trip-management"])
  }
);
}

}
