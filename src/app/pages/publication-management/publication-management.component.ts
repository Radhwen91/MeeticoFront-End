import {Component, OnInit, ViewChild} from '@angular/core';
import {Publication} from '../../models/publication';
import {PublicationService} from '../../services/publication.service';
import {Router} from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, SortDirection} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';

import {UpdatePublicationBackComponent} from './update-publication-back/update-publication-back.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ListCommentsBackComponent} from './list-comments-back/list-comments-back.component';
import {ToastrService} from "ngx-toastr";
import {Comment} from "../../models/comment";
import {PostLike} from "../../models/PostLike";
import {FileDB} from "../../models/fileDB";
import {Observable} from "rxjs";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {AlertComponent} from "../../front/alert/alert.component";
@Component({
  selector: 'app-publication-management',
  templateUrl: './publication-management.component.html',
  styleUrls: ['./publication-management.component.scss']
})
export class PublicationManagementComponent implements OnInit {
  public listPub:Publication[];
  // public pageSlice = this.listPub.slice(0,3);
  publication : Publication =new Publication();
  listfile2:FileDB[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private toastr : ToastrService,private publicationservice: PublicationService,private router: Router,public dialog: MatDialog,private  snackBar: MatSnackBar) { }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload() :FileDB[]{
    this.progress = 0;
    this.currentFile = this.selectedFiles.item(0);
    this.publicationservice.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.publicationservice.getFile2(event.body).subscribe(
            data=>{
              this.file=data;
              console.log('file',this.file)
              // this.listfile2.push(this.file);
              //  console.log('////////',this.listfile2)
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
    return this.listfile2;
  }
  showToatr2(){
    this.toastr.error('Post deleted Succesfully ','Post deleted Succesfully');
  }
  openSnackBar(message,action){

    let SnackBarRef = this.snackBar.open(message,action,{duration: 2000});
    SnackBarRef.afterDismissed().subscribe(()=>{


    });
    SnackBarRef.onAction().subscribe(()=>{


    });
  }




  ngOnInit(): void {
    this.publicationservice.getPubToday().subscribe(
      res=>{
        console.log(res);
        this.listPub=res;
        this.dataSource=new MatTableDataSource<Publication>(this.listPub)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  displayedColumns = ['delete','..','contents','date','userr'];

  dataSource: MatTableDataSource<Publication>;
  ngAfterViewInit() {

  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }



  show=false;
  ChangeStatus(){
    this.show= !this.show;

  }




  PDF(){
    this.publicationservice.Pdf().subscribe(
      res=>{
        //console.log(res);

      }
    );

  }
  UpdatePublication(r:Publication){
    const dialogRef = this.dialog.open(UpdatePublicationBackComponent,
      {data:r}


    );
    console.warn('r',r);

    dialogRef.afterClosed().subscribe(data => {
      console.log(`Dialog result: ${data}`);
    });
  }

  ListComments(r:Publication){
    const dialogRef = this.dialog.open(ListCommentsBackComponent,
      {data:r}


    );
    console.warn('r',r);

    dialogRef.afterClosed().subscribe(data => {
      console.log(`Dialog result: ${data}`);
    });
  }
  deletePub(publication:any){
    this.publicationservice.deletePub(publication.idPublication).subscribe(()=>this.publicationservice.getPubToday().subscribe(
        data=>{
          this.listPub=data
          this.dataSource=new MatTableDataSource<Publication>(this.listPub)
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

        }
      )
    );

  }
  etatbadword : string;
  addPub(){
    this.publicationservice.addPublication(this.publication).subscribe(
      data=>{
        console.log(data)
        this.publication=data
       // this.toastr.success('Post Added Successfully ','Post Added Successfully');
        console.log("dataaa111",this.publication.idPublication);
        this.publicationservice.affecter(this.publication.idPublication,this.file.id,this.file).subscribe(
          data=>{

          }

        );


        /////////////////
        this.publicationservice.BadWords(this.publication.contents).subscribe(
          data2=>{
            this.etatbadword = data2

            ///////////////////
            if(data2===true){
              const dialogRef = this.dialog.open( AlertComponent,
              );
              dialogRef.afterClosed().subscribe(data => {

              });
              let audio = new Audio()
              audio.src= "../assets/alert.mp3"
              audio.load();
              audio.play();
             this.toastr.error('Bad Word detected ','Bad Word detected');

            }
          } );
        ///////////
        //window.location.reload();
      }

    );

  }





  showToatr(){
    this.toastr.success('Post added Succesfully ','Post added Succesfully');
  }



  public listCom:any;
  listfile:FileDB[];
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  fileInfos: Observable<any>;
  file: FileDB;
  comment : Comment= new Comment();
  like : PostLike= new PostLike();

  playSound(){
    let audio = new Audio()
    audio.src= "../assets/confirm2.mp3"
    audio.load();
    audio.play();
  }

}

