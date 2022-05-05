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
@Component({
  selector: 'app-publication-management',
  templateUrl: './publication-management.component.html',
  styleUrls: ['./publication-management.component.scss']
})
export class PublicationManagementComponent implements OnInit {
  public listPub:Publication[];
  // public pageSlice = this.listPub.slice(0,3);
  publication : Publication =new Publication();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private toastr : ToastrService,private publicationservice: PublicationService,private router: Router,public dialog: MatDialog,private  snackBar: MatSnackBar) { }



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
  displayedColumns = ['delete','contents','date'/*,'userr'*/];

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
  addPub(){
    this.publicationservice.addPublication(this.publication).subscribe(()=>this.publicationservice.getPubToday().subscribe(

        data=>{
          this.listPub=data
          this.dataSource=new MatTableDataSource<Publication>(this.listPub)
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;


       //   console.log('dataaaaa',data)


        }
      )
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

