import {Component, Inject, OnInit} from '@angular/core';
import {Publication} from '../../../../models/publication';
import {PublicationService} from '../../../../services/publication.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Router} from '@angular/router';
@Component({
  selector: 'app-update-publication',
  templateUrl: './update-publication.component.html',
  styleUrls: ['./update-publication.component.scss']
})
export class UpdatePublicationComponent implements OnInit {

  publication : Publication ;
  constructor(private publicationservice: PublicationService,@Inject(MAT_DIALOG_DATA) public data: Publication, private router:Router) {
    this.publication=data;


  }

  ngOnInit(): void {
  }

  public updatePublication(){
    this.publicationservice.updatePublication(this.data).subscribe(
      ()=>this.router.navigateByUrl("/home")
    );
  }
  playSound(){
    let audio = new Audio()
    audio.src= "../assets/confirm2.mp3"
    audio.load();
    audio.play();
  }



}
