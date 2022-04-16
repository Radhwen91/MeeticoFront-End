import { ReclamationService } from 'src/app/services/reclamation.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Reclamation } from 'src/app/models/reclamation';

@Component({
  selector: 'app-update-reclamation',
  templateUrl: './update-reclamation.component.html',
  styleUrls: ['./update-reclamation.component.scss']
})
export class UpdateReclamationComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private service:ReclamationService, private router:Router) {


   }

  

  ngOnInit(): void {
    console.log(this.data);
    
  }

  public updateReclamation(){
    this.service.addReclamation(this.data).subscribe(
      ()=>this.router.navigateByUrl("/reclamation-management")
        );
  }

}
