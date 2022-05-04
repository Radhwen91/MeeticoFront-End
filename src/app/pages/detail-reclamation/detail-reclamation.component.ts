import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-detail-reclamation',
  templateUrl: './detail-reclamation.component.html',
  styleUrls: ['./detail-reclamation.component.scss']
})
export class DetailReclamationComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any){
   
  }

  ngOnInit(): void {
    console.log(this.data);
    
  }

}
