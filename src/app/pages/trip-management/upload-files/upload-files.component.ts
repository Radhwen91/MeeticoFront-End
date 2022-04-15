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
  file: FileDB;
  id:number;
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
          this.id=event.body;
          
          this.tripservice.getFilesdetail(this.id).subscribe(
            data=>{
              this.file=data;
              console.log(this.id)
              console.log('file',this.file)
              console.log(this.router.snapshot.params.id)
              this.tripservice.affecterfileauvoyage(this.router.snapshot.params.id,this.id,this.file).subscribe(

                ()=>this.tripservice.getFiles(this.router.snapshot.params.id).subscribe(
                  data=>{
                    this.listfile=data
                  }
                )
              )
              
              
            }
          );
          //this.fileInfos = this.tripservice.getFiles(this.router.snapshot.params.id);
        
        
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
