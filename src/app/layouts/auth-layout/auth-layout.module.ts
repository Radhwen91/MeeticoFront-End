import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
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
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatMenuModule,
    MatDialogModule,
    // NgbModule
  ],
  exports: [
    Navbar2Component,
    Card2Component,
    StartPostComponent,
    CreatePostComponent,
    ListCommentsFront2Component,
    ListPublication2Component,
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
  ]
})
export class AuthLayoutModule { }
