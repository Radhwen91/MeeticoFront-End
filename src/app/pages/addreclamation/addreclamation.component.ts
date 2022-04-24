import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Reclamation } from 'src/app/models/reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ImagenServiceService } from 'src/app/services/imagen-service.service';
@Component({
  selector: 'app-addreclamation',
  templateUrl: './addreclamation.component.html',
  styleUrls: ['./addreclamation.component.scss']
})
export class AddreclamationComponent implements OnInit {
reclamation :Reclamation;
@ViewChild('imagenInputFile', {static: false}) imagenFile: ElementRef;

  imagen: File;
  imagenMin: File;
  constructor(private service:ReclamationService, 
    private router:Router,
    private imagenService: ImagenServiceService,
    private spinner: NgxSpinnerService
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
  }
  
  
  
  
  onFileChange(event) {
    this.imagen = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.imagenMin = evento.target.result;
    };
    fr.readAsDataURL(this.imagen);
  }

  onUpload(): void {
  
    this.spinner.show();
    this.imagenService.upload(this.imagen).subscribe(
      data => {
        this.service.addReclamation(this.reclamation,data).subscribe(
          ()=>this.router.navigateByUrl("/reclamation-management")
            );
        
      },
      err => {
        alert(err.error.mensaje);
        this.spinner.hide();
        this.reset();
      }
    );
    
  }

  reset(): void {
    this.imagen = null;
    this.imagenMin = null;
    this.imagenFile.nativeElement.value = '';
  }



}
