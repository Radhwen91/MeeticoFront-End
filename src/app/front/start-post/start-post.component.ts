import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PublicationService} from "../../services/publication.service";
import {Publication} from "../../models/publication";
import {
  UpdatePublicationBackComponent
} from "../../pages/publication-management/update-publication-back/update-publication-back.component";
import {CreatePostComponent} from "../create-post/create-post.component";

@Component({
  selector: 'app-start-post',
  templateUrl: './start-post.component.html',
  styleUrls: ['./start-post.component.scss']
})
export class StartPostComponent implements OnInit {

  constructor(private publicationservice: PublicationService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  AddPublication(){
    const dialogRef = this.dialog.open(CreatePostComponent



    );


    dialogRef.afterClosed().subscribe()
  }



}
