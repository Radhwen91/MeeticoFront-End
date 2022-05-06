import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pub-layout',
  templateUrl: './pub-layout.component.html',
  styleUrls: ['./pub-layout.component.scss']
})
export class PubLayoutComponent implements OnInit, OnDestroy {


  constructor(private router: Router) { }

  ngOnInit() {


  }
  ngOnDestroy() {

  }
}
