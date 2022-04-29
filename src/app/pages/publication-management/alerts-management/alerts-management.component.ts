import {Component, OnInit, ViewChild} from '@angular/core';
import {PublicationService} from "../../../services/publication.service";
import {MatTableDataSource} from "@angular/material/table";
import {Publication} from "../../../models/publication";
import {Alert} from "../../../models/alert";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ToastrService} from "ngx-toastr";
@Component({
  selector: 'app-alerts-management',
  templateUrl: './alerts-management.component.html',
  styleUrls: ['./alerts-management.component.scss']
})
export class AlertsManagementComponent implements OnInit {
  public listAlerts:Alert[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private toastr : ToastrService,private publicationservice: PublicationService) { }


  showToatr(){
    this.toastr.success('Some message ','title');
  }
  displayedColumns = ['delete','User','lastname'];

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

  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
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




}
