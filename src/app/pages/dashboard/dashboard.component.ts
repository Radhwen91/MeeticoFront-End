import { FeedbackService } from 'src/app/services/feedback.service';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { ReclamationService } from 'src/app/services/reclamation.service';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";
import { TripService } from 'src/app/services/tripservices/trip.service';
import { DestionationVisitorsCount } from 'src/app/models/destionationVisitorsCount';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  pecentageTypePriority: Number;
  pecentageType: Number;
  pecentagePriority: Number;
  nbrReclamationEnAttente:Number;
  priority ="NORMAL";
  type="OTHER";
  listoftrips:DestionationVisitorsCount[];
  meilleurDestination:any;
  constructor(private reclamationService:ReclamationService,private feedbackservice:FeedbackService,private tripservice:TripService) {}
  ngOnInit() {
    this.reclamationService.statWatingReclamation().subscribe(
      data => {
        console.log(data);
        this.nbrReclamationEnAttente = data;
      }
    );
    this.tripservice.getDestionationVisitCount().subscribe(
      data => {
        console.log('data',data);
        this.listoftrips = data;
       
      }
    );
     this.tripservice.getmeiulleurdestination().subscribe(
       data=>{
         console.log(data)
         this.meilleurDestination=data
       }
     )
    // this.datasets = [
    //   [0, 20, 10, 30, 15, 40, 20, 60, 60],
    //   [0, 20, 5, 25, 10, 30, 15, 40, 40]
    // ];
    this.data = this.datasets;


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: chartExample1.options,
			data: chartExample1.data
		});
    this.StatPercentageOfReclamationByPriorityOrByType(this.priority,this.type);
    this.StatPercentageOfReclamationByType(this.type);
    this.StatPercentageOfReclamationByPriority(this.priority);




    this.feedbackservice.statPercentageFeedbacksByStars().subscribe(
      data => {
        console.log(data);
        this.datasets = data;
      }
    );
  }

  public StatPercentageOfReclamationByPriorityOrByType(priority,type){
   
    this.reclamationService.statReclamationByTypeAndPriority(priority,type).subscribe(
      data => {
        console.log(data);
        this.pecentageTypePriority = data;
      }
    );
    
  }
  public StatPercentageOfReclamationByType(type){
    this.reclamationService.statReclamationByType(type).subscribe(
      data => {
        console.log(data);
        this.pecentageType = data;
      }
    );
  }
  public StatPercentageOfReclamationByPriority(priority){
    this.reclamationService.statReclamationByPriority(priority).subscribe(
      data => {
        console.log(data);
        this.pecentagePriority = data;
      }
    );
  }

  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

}
