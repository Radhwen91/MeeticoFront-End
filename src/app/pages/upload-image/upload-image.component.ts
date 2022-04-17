import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ImagenServiceService } from 'src/app/services/imagen-service.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {
  @ViewChild('imagenInputFile', {static: false}) imagenFile: ElementRef;

  imagen: File;
  imagenMin: File;
  constructor(
    private imagenService: ImagenServiceService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

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
      
        this.router.navigate(['/reclamation-management/addReclamation']);
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
