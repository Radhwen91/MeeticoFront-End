import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FileDB } from 'src/app/models/fileDB';
import { Trip } from 'src/app/models/trip';
import { TripService } from 'src/app/services/tripservices/trip.service';

import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import {FileTrip} from "../../../models/FileTrip";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-ajouter-trip',
  templateUrl: './ajoutercomponent.html',
  styleUrls: ['./ajouter.component.scss']
})
export class AjouterComponent implements OnInit {

  public tripForm: FormGroup;
  listfile:FileTrip[];
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  trip:Trip;
  fileInfos: Observable<any>;
  file: FileTrip;
  id:number;
  constructor(private toastr : ToastrService,private tripservice:TripService,private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
    this.listfile=[];

  }
  initForm() {/*
    this.tripForm = new FormGroup({
        destination: new FormControl('',[Validators.required,Validators.minLength(3)]),
        startDate: new FormControl('',[Validators.required]),
        endDate: new FormControl('',[Validators.required]),
        object: new FormControl('',[Validators.required,Validators.maxLength(40)]),
    })*/
    this.tripForm = this.formBuilder.group({
      destination: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      object: ['', [Validators.required, ,Validators.maxLength(50)]],
      file: [null, Validators.required],

  });
  this.tripForm.valueChanges.subscribe(
    data=>{console.log(this.tripForm)}
  )
}

//get f() { return this.tripForm.; }
ajouter(){
console.log(this.tripForm.value);
this.tripservice.ajoutTrip(this.tripForm.value,1).subscribe(
  data=>{
    console.log(data)
    this.trip=data;
    this.toastr.success('Trip Added Successfully ','Trip Added Successfully');
    let audio = new Audio()
    audio.src= "../assets/alert.mp3"
    audio.load();
    audio.play();
    this.progress = 0;
  this.currentFile = this.selectedFiles.item(0);
  this.tripservice.upload(this.currentFile).subscribe(
    event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.message = event.body.message;
        this.tripservice.getFilesdetail(event.body).subscribe(
          res=>{
            this.file=res;
            console.log(this.trip)
            console.log(res)
            this.tripservice.affecterfileauvoyage(this.trip.idTrip,res.id,this.file).subscribe(
              res=>{
               //this.listfile=res;
               this.router.navigate(["/trip-management"])
              }

          );
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
 }
);
}
selectFile(event) {
  this.selectedFiles = event.target.files;
}
upload() :FileTrip{
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
  return this.file;
}

supprimer(file :FileTrip){

  this.listfile.splice(this.listfile.indexOf(file),1)
}

}
