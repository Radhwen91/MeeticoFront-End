import { Feedback } from './../../models/feedback';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-datail-feedback',
  templateUrl: './datail-feedback.component.html',
  styleUrls: ['./datail-feedback.component.scss']
})
export class DatailFeedbackComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Feedback) { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
