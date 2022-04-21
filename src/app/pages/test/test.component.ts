import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/models/feedback';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  feedback:Feedback;
  constructor() {
    this.feedback= new Feedback()
   }
radhwen : string="hhhh";
  ngOnInit(): void {
  }

}
