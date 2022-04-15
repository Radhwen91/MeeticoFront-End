import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileDB } from 'src/app/models/fileDB';
import { TripService } from 'src/app/services/tripservices/trip.service';

@Component({
  selector: 'app-upload-files-ajout',
  templateUrl: './upload-files-ajout.component.html',
  styleUrls: ['./upload-files-ajout.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class UploadFilesAjoutComponent implements OnInit {

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  fileInfos: Observable<any>;
  listfile: FileDB[];
  file: FileDB;
  id:number;
  constructor(private tripservice:TripService) { }

  ngOnInit(): void {
    this.listfile=[];
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
