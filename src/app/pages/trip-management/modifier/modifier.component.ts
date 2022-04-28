import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FileDB } from 'src/app/models/fileDB';
import { Trip } from 'src/app/models/trip';
import { User } from 'src/app/models/user';
import { TripService } from 'src/app/services/tripservices/trip.service';
import { FormBuilder,Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { ViewChild} from '@angular/core';;
import {MatSort, SortDirection} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-ajouter-trip',
  templateUrl: './modifiercomponent.html',
  styleUrls: ['./modifier.component.scss']
})
export class ModifierComponent implements OnInit,AfterContentInit {
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  fileInfos: Observable<any>;
  listfile: FileDB[];
  file: FileDB;
  id:number;
  idf:number[];
  trip:Trip;
  public tripForm: FormGroup;
  listofusers:User[];
  counters = [100, 200, 10];
  displayedColumns = ['lastName','firstName', 'email', 'phoneNumber', 'option'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private tripservice:TripService,private router:ActivatedRoute,private route :Router,private formBuilder: FormBuilder) { }
  ngAfterContentInit(): void {
    this.get(this.router.snapshot.params.id)
  }

  ngOnInit(): void {
    
    this.tripservice.getUserss().subscribe(
      data => {
        console.log('data',data);
        this.listofusers = data;
        this.dataSource = new MatTableDataSource(this.listofusers);
        this.dataSource._renderChangesSubscription;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
    this.tripservice.getFiles(this.router.snapshot.params.id).subscribe(
      data => {
        console.log('data',data);
        this.listfile = data;
        
      }
    );
  
    
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  initForm(data) {
    this.tripForm = this.formBuilder.group({/*
        destination: new FormControl(data?.destination),
        startDate: new FormControl(data?.startDate,
        endDate: new FormControl(data?.endDate),
        object: new FormControl(data?.object),*/
        destination: [data?.destination, Validators.required],
      startDate: [data?.startDate, Validators.required],
      endDate: [data?.endDate, Validators.required],
      object: [data?.object, [Validators.required, ,Validators.maxLength(50)]],
      file: [null, Validators.required],
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
              //this.idf=[];
              //this.idf.push(this.id);
              this.tripservice.affecterfileauvoyage(this.router.snapshot.params.id,this.id,this.file).subscribe(
  
                ()=>this.tripservice.getFiles(this.router.snapshot.params.id).subscribe(
                  res=>{
                    this.listfile=res
                    this.route.navigate(["/trip-management"])
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
);

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
            //this.idf=[];
            //this.idf.push(this.id);
            
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
affecter(user :any){
  this.tripservice.affectusertrip(this.router.snapshot.params.id,user.userId,this.tripForm.value).subscribe(()=>this.tripservice.getUserss().subscribe(
    data=>{
      this.listofusers=data;
      this.dataSource = new MatTableDataSource(this.listofusers);
      this.dataSource._renderChangesSubscription;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  ));
  
}
desaffecter(user :any){
  this.tripservice.desaffeteraffectusertrip(this.router.snapshot.params.id,user.userId,this.tripForm.value).subscribe(()=>this.tripservice.getUserss().subscribe(
    data=>{
      this.listofusers=data;
      this.dataSource = new MatTableDataSource(this.listofusers);
      this.dataSource._renderChangesSubscription;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  ));
  
}
supprimer(files :Number){
  this.tripservice.deletefile(files).subscribe(
    data=>{
    this.tripservice.getFiles(this.router.snapshot.params.id).subscribe(
      data=>{
      this.listfile=data
    }
  )
}
);
}


}
