import { HttpEventType, HttpResponse } from '@angular/common/http';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FileDB } from 'src/app/models/fileDB';
import { TripService } from 'src/app/services/tripservices/trip.service';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})
export class UploadFilesComponent implements OnInit,AfterContentInit {

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  fileInfos: Observable<any>;
  listfile: FileDB[];
  file:FileDB;
  constructor(private tripservice:TripService,private router:ActivatedRoute) { }
  ngAfterContentInit(): void {
    this.tripservice.getFiles(this.router.snapshot.params.id).subscribe(
      data => {
        console.log('data',data);
        this.listfile = data;
      }
    );
  }

  ngOnInit(): void {
  
    
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload() {
    this.progress = 0;
    this.currentFile = this.selectedFiles.item(0);
   this.tripservice.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.tripservice.getFilesdetail(event.body).subscribe(
            data => {
              console.log('data',data);
              this.file = data;
            }
          );
          const json = event.body;
          const obj = JSON.parse(json);
          this.tripservice.affecterfileauvoyage(this.router.snapshot.params.id,obj,this.file);
          this.fileInfos = this.tripservice.getFiles(this.router.snapshot.params.id);
          console.log(obj)
          console.log(this.router.snapshot.params.id)
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
    this.selectedFiles = undefined;
  }
  
}
