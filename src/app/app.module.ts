import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import { TestfaresComponent } from './pages/testfares/testfares.component';
import { UpdatePublicationBackComponent } from './pages/publication-management/update-publication-back/update-publication-back.component';
import { ListCommentsBackComponent } from './pages/publication-management/list-comments-back/list-comments-back.component';
import { PublicationAjoutComponent } from './pages/publication-management/publication-ajout/publication-ajout.component';
import { FrontPublicationComponent } from './pages/publication-management/front-publication/front-publication.component';
import { UpdatePublicationComponent } from './pages/publication-management/front-publication/update-publication/update-publication.component';
import { CommentsManagementComponent } from './pages/comments-management/comments-management.component';
import { ChatbotComponent } from './pages/publication-management/chatbot/chatbot.component';
import { ListCommentComponent } from './pages/publication-management/front-publication/list-comment/list-comment.component';
import { FrontComponent } from './front/front.component';
import { Navbar2Component } from './front/navbar2/navbar2.component';
import {AuthLayoutModule} from "./layouts/auth-layout/auth-layout.module";
import {MatMenuModule} from "@angular/material/menu";
import { ListCommentsFront2Component } from './front/list-comments-front2/list-comments-front2.component';
import { ListPublication2Component } from './front/list-publication2/list-publication2.component';
import { OptionDropdownComponent } from './front/option-dropdown/option-dropdown.component';
import { CommentAddComponent } from './front/comment-add/comment-add.component';
import { AlertComponent } from './front/alert/alert.component';
import { AlertsManagementComponent } from './pages/publication-management/alerts-management/alerts-management.component';








@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule,
    AuthLayoutModule,
    MatMenuModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    UserLayoutComponent,
    ListCommentComponent,





















  ],
  providers: [  {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
