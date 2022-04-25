import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Publication} from '../../../models/publication';
import {Router} from '@angular/router';
import {PublicationService} from '../../../services/publication.service';

@Component({
  selector: 'app-update-publication-back',
  templateUrl: './update-publication-back.component.html',
  styleUrls: ['./update-publication-back.component.scss']
})
export class UpdatePublicationBackComponent implements OnInit {
  public listComments:Comment[];
  comment : Comment =new Comment();
  publication : Publication ;
  constructor(private publicationservice: PublicationService,@Inject(MAT_DIALOG_DATA) public data: Publication, private router:Router) {
    this.publication=data;


  }

  ngOnInit(): void {
  }
  public updatePublication(){
    this.publicationservice.updatePublication(this.data).subscribe(
      ()=>this.router.navigateByUrl("/publication-management")
    );
  }
}
