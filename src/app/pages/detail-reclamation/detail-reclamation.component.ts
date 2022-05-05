import { ImagenServiceService } from './../../services/imagen-service.service';
import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Picture } from 'src/app/models/picture';



@Component({
  selector: 'app-detail-reclamation',
  templateUrl: './detail-reclamation.component.html',
  styleUrls: ['./detail-reclamation.component.scss']
})
export class DetailReclamationComponent implements OnInit {
picture: Picture;
 id=1;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any , private service:ImagenServiceService){
   
  }

  ngOnInit(): void {
    console.log(this.data);

    this.service.getFilesdetail(this.id).subscribe(
      data => {
        this.picture=data;
        console.log("+++++++++++++++++"+JSON.parse(JSON.stringify(data)));
        //this.picture = data;
        
      }
    )
    
  }

}
