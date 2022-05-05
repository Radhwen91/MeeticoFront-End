import {Component, OnInit, ViewChild} from '@angular/core';
import {PublicationService} from "../../../services/publication.service";
import {MatTableDataSource} from "@angular/material/table";
import {Publication} from "../../../models/publication";
import {Alert} from "../../../models/alert";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ToastrService} from "ngx-toastr";
import {BannedUser} from "../../../models/BannedUser";
@Component({
  selector: 'app-alerts-management',
  templateUrl: './alerts-management.component.html',
  styleUrls: ['./alerts-management.component.scss']
})
export class AlertsManagementComponent implements OnInit {
  public listAlerts:Alert[];
  public listUsers: BannedUser[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator2: MatPaginator;
  @ViewChild(MatSort) sort2: MatSort;

  constructor(private toastr : ToastrService,private publicationservice: PublicationService) { }


  showToatr(){
    this.toastr.info('Alert deleted successfully','Alert deleted successfully');
  }
  displayedColumns = ['delete','User','lastname'];
  displayedColumns2 = ['name','debloquer'/*,'date'*/];
  dataSource2: MatTableDataSource<BannedUser>;
  dataSource: MatTableDataSource<Alert>;
  ngAfterViewInit() {

  }
  ngOnInit(): void {
    this.publicationservice.getAlerts().subscribe(
      res=>{
        console.log(res);
        this.listAlerts=res;
        this.dataSource=new MatTableDataSource<Alert>(this.listAlerts)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );

    this.publicationservice.bannedUsers().subscribe(
      res=>{
        console.log(res);
        this.listUsers=res;
        this.dataSource2=new MatTableDataSource<BannedUser>(this.listUsers)
        this.dataSource2.paginator = this.paginator2;
        this.dataSource2.sort = this.sort2;
      }
    );


  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  applyFilter2(filterValue2: string) {
    filterValue2 = filterValue2.trim(); // Remove whitespace
    filterValue2 = filterValue2.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource2.filter = filterValue2;
  }
  deleteAlert(alert:any){
    this.publicationservice.deleteAlert(alert.idAlert).subscribe(()=>this.publicationservice.getAlerts().subscribe(
        data=>{
          this.listAlerts=data
          this.dataSource=new MatTableDataSource<Alert>(this.listAlerts)
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

        }
      )
    );

  }

  debloqueruser(user:any){
    this.publicationservice.debloqueruser(user.userId).subscribe(()=>this.publicationservice.bannedUsers().subscribe(
        data=>{


          this.listUsers=data;
          this.dataSource2=new MatTableDataSource<BannedUser>(this.listUsers)
          this.dataSource2.paginator = this.paginator2;
          this.dataSource2.sort = this.sort2;

        }
      )
    );

  }


}
