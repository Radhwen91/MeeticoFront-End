import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PubLayoutRoutes } from './pub-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import {FrontComponent} from "../../front/front.component";

import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatChipsModule} from "@angular/material/chips";
import {Navbar2Component} from "../../front/navbar2/navbar2.component";
import {Card2Component} from "../../front/card2/card2.component";
import {StartPostComponent} from "../../front/start-post/start-post.component";
import {CreatePostComponent} from "../../front/create-post/create-post.component";
import {MatMenuModule} from "@angular/material/menu";
import {MatDialogModule} from "@angular/material/dialog";
import {ListCommentsFront2Component} from "../../front/list-comments-front2/list-comments-front2.component";
import {ListPublication2Component} from "../../front/list-publication2/list-publication2.component";
import {OptionDropdownComponent} from "../../front/option-dropdown/option-dropdown.component";
import {CommentAddComponent} from "../../front/comment-add/comment-add.component";
import {AlertComponent} from "../../front/alert/alert.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {NetworkSideNavComponent} from "../../front/network-side-nav/network-side-nav.component";
import {MatListModule} from "@angular/material/list";
import {ScrollingModule} from '@angular/cdk/scrolling';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PubLayoutRoutes),
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatMenuModule,
    MatDialogModule,
    MatListModule,
    // NgbModule,
    ScrollingModule

  ],
  exports: [
    Navbar2Component,
    Card2Component,
    StartPostComponent,
    CreatePostComponent,
    ListCommentsFront2Component,
    ListPublication2Component,
    CommentAddComponent,
    AlertComponent,
    NetworkSideNavComponent,


  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    FrontComponent,
    Navbar2Component,
    Card2Component,
    StartPostComponent,
    CreatePostComponent,
    ListCommentsFront2Component,
    ListPublication2Component,
    OptionDropdownComponent,
    CommentAddComponent,
    AlertComponent,
    NetworkSideNavComponent,

  ]
})
export class PubLayoutModule { }
