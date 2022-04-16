import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FileDB } from 'src/app/models/fileDB';
import { Trip } from 'src/app/models/trip';
import { TripService } from 'src/app/services/tripservices/trip.service';

import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-ajouter-trip',
  templateUrl: './ajoutercomponent.html',
  styleUrls: ['./ajouter.component.scss']
})
export class AjouterComponent implements OnInit {

  public tripForm: FormGroup;
  listfile:FileDB[];
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  fileInfos: Observable<any>;
  file: FileDB;
  id:number;
  constructor(private tripservice:TripService,private router:Router) { }

  ngOnInit(): void {
    this.initForm()
    this.listfile=[];
    
  }
  initForm() {
    this.tripForm = new FormGroup({
        destination: new FormControl(),
        startDate: new FormControl(),
        endDate: new FormControl(),
        object: new FormControl(),
        file: new FormControl(),
    })
}
ajouter(){
console.log(this.tripForm.value);
this.tripservice.ajoutTrip(this.tripForm.value,1).subscribe(
  data=>{
    console.log(this.listfile)
    for(var f of this.listfile)
    {
      console.log('file',f);
      this.tripservice.affecterfileauvoyage(data.idTrip,f.id,f).subscribe(
        res=>{
            
        }
     
    );
    }
  
    this.router.navigate(["/trip-management"])
  }
);
}
selectFile(event) {
  this.selectedFiles = event.target.files;
}
upload() :FileDB[]{
  this.progress = 0;
  this.currentFile = this.selectedFiles.item(0);
  this.tripservice.upload(this.currentFile).subscribe(
    event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.message = event.body.message;
        this.tripservice.getFilesdetail(event.body).subscribe(
          data=>{
            this.file=data;
            console.log('file',this.file)
         
            this.listfile.push(this.file);   
            console.log(this.listfile)           
            
          }
        );

      }
    },
    err => {
      this.progress = 0;
      this.message = 'Could not upload the file!';
      this.currentFile = undefined;
    });
  this.selectedFiles = undefined;
  return this.listfile;
}



}
