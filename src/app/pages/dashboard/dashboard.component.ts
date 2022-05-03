import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { UserService } from 'src/app/_services/user.service';

import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";

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

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];

    this.data = this.datasets[0];

    parseOptions(Chart, chartOptions());

    this.userService.accountStatistics().subscribe(statistics => {

      var chartSales = document.getElementById('chart-sales'); //Exemple 1
      this.salesChart = new Chart(chartSales, {
        type: 'bar',
        options: chartExample1.options,
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [{
            backgroundColor: 'rgba(255, 99, 132, 0.8)',
            borderColor: 'rgba(255, 99, 132, 0.8)',
            label: "Total Users ",
            data: statistics[0],
          },
          {
            backgroundColor: 'rgba(46, 204, 113, 0.8)',
            borderColor: 'rgba(46, 204, 113, 1)',
            label: "Active Users ",
            data: statistics[1],
          }]
        
      }});

      var chartOrders = document.getElementById('chart-gender'); //Exemple 2
      new Chart(chartOrders, {
        type: 'doughnut',
        data: {
          labels: ["Male", "Female"],
          datasets: [
            {
              label: "Users",
              backgroundColor: ["#3e95cd", "#c45850"],
              data: [statistics[2], statistics[3]]
            }
          ]
        }
      });
      
    });

  }

  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

}
