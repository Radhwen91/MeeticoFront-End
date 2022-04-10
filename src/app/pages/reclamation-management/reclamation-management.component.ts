import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/app/models/reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-reclamation-management',
  templateUrl: './reclamation-management.component.html',
  styleUrls: ['./reclamation-management.component.scss']
})
export class ReclamationManagementComponent implements OnInit {
listReclamations:Reclamation[];
  constructor(private userService:ReclamationService) { }

  ngOnInit(): void {
    this.userService.getAllReclamationByType().subscribe(
      data => {
        console.log(data);
        this.listReclamations = data;
      }
    );

  }

}
