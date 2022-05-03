import { NotificationService } from './../../services/notification.service';
import { PusherService } from './../../services/websocket/pusher.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Reclamation } from 'src/app/models/reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ImagenServiceService } from 'src/app/services/imagen-service.service';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import Pusher from 'pusher-js';
@Component({
  selector: 'app-addreclamation',
  templateUrl: './addreclamation.component.html',
  styleUrls: ['./addreclamation.component.scss']
})
export class AddreclamationComponent implements OnInit {
reclamation :Reclamation;
@ViewChild('imagenInputFile', {static: false}) imagenFile: ElementRef;
r :Reclamation[];
  imagen: File;
  imagenMin: File;
  public reclamationForm: FormGroup;
 
  constructor(private service:ReclamationService, 
    private router:Router,
    private imagenService: ImagenServiceService,
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder,
    private PusherService:PusherService,
    private notificationservice:NotificationService
    ) { 

    this.reclamation = new Reclamation();
    

  }

/*public addReclamation(){
 // let a=this.onUpload();
  this.service.addReclamation(this.reclamation).subscribe(
    ()=>this.router.navigateByUrl("/reclamation-management")
      );
}
*/
  ngOnInit(): void {
    this.initForm()

    

  }
  initForm() {
  this.reclamationForm = this.formBuilder.group({
    title: ['',[ Validators.required,Validators.maxLength(50)]],
    description: ['',[ Validators.required,Validators.maxLength(4000)]],
    type: ['', Validators.required],
    priority: ['', Validators.required],
});
this.reclamationForm.valueChanges.subscribe(
  data=>{console.log(this.reclamationForm)}
)}
  

  onFileChange(event) {
    this.imagen = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.imagenMin = evento.target.result;
    };
    fr.readAsDataURL(this.imagen);
  }

  onUpload(): void {
    if (this.reclamationForm.valid) {
    this.spinner.show();
    this.imagenService.upload(this.imagen).subscribe(
      data => {

        console.log(`data entrante :${data} et reclamation entrante${this.reclamation}`)
        this.service.addReclamation(this.reclamation,data).subscribe(
          ()=>this.router.navigateByUrl("/reclamation-management")
          
            );
            this.notificationservice.showSuccess("Reclamation has been sent","Success")

      },
      err => {
        alert(err.error.mensaje);
        this.spinner.hide();
        this.reset();
        this.notificationservice.showError("Reclamation is not send","Error");
      }
    );
    }
    console.log(JSON.stringify(this.reclamationForm.value, null, 2));
  }
  onReset(): void {
   
    this.reclamationForm.reset();
  }
  reset(): void {
    this.imagen = null;
    this.imagenMin = null;
    this.imagenFile.nativeElement.value = '';
  }
}
