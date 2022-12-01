import { Component, OnInit } from '@angular/core';
import {PublicationService} from "../../services/publication.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss']
})
export class Card2Component implements OnInit {
user : User;
  constructor(private publicationservice : PublicationService) { }

  ngOnInit(): void {

    this.publicationservice.connectedutilsateur().subscribe(
      data2=>{
        // this.ownedornot = data2
        this.user=data2
        ///////////////////

      } );

  }

}
