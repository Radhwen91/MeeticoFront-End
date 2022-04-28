import { Component, OnInit } from '@angular/core';
import {PublicationService} from "../../services/publication.service";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor(private publicationservice: PublicationService) { }
  nbalert : number ;
  nbralertsban : number;
  ngOnInit(): void {
    this.publicationservice.getNbrAlerts().subscribe(
      data=>{
        this.nbalert=data;

      }  );

    this.publicationservice.getNbrAlertsban().subscribe(
      data=>{
        this.nbralertsban=data;

      }  );


  }





}
