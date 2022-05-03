import { Feedback } from '../../models/feedback';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datail-feedback',
  templateUrl: './detail-feedback.component.html',
  styleUrls: ['./detail-feedback.component.scss'],
  providers: [NgbRatingConfig],
})
export class DetailFeedbackComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, config: NgbRatingConfig) { 

    config.max = 5;
  config.readonly = true;
  }
 
  
  ngOnInit(): void {
    console.log(this.data);
  }

}
