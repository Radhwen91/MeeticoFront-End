import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reclamation } from 'src/app/models/reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-addreclamation',
  templateUrl: './addreclamation.component.html',
  styleUrls: ['./addreclamation.component.scss']
})
export class AddreclamationComponent implements OnInit {
reclamation :Reclamation;
  constructor(private service:ReclamationService, private router:Router) { 

    this.reclamation = new Reclamation();
   

  }

public addReclamation(){
  this.service.addReclamation(this.reclamation).subscribe(
    ()=>this.router.navigateByUrl("/reclamation-management")
      );
}

  ngOnInit(): void {
  }

}
