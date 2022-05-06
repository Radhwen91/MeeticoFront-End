import { DetailFeedbackUserComponent } from './../../pages/detail-feedback-user/detail-feedback-user.component';
import { ReclamationManagementComponent } from 'src/app/pages/reclamation-management/reclamation-management.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLayoutRoutes } from './user-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AcceuiltripComponent } from 'src/app/pages/trip-management/acceuiltrip/acceuiltrip.component';
import { NgbdModalContent } from 'src/app/pages/modal/modal.component';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { NouisliderModule } from 'ng2-nouislider';
import { TestfaresComponent } from "../../pages/testfares/testfares.component";
import {
  FrontPublicationComponent
} from "../../pages/publication-management/front-publication/front-publication.component";
import {
  UpdatePublicationComponent
} from "../../pages/publication-management/front-publication/update-publication/update-publication.component";


import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatExpansionModule } from "@angular/material/expansion";
import { CommentsManagementComponent } from "../../pages/comments-management/comments-management.component";
import { ChatbotComponent } from "../../pages/publication-management/chatbot/chatbot.component";
// import { ToastrModule } from 'ngx-toastr';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { DetailtripComponent } from 'src/app/pages/trip-management/detailtrip/detailtrip.component';
import { SearchdialogComponent } from 'src/app/pages/trip-management/searchdialog/searchdialog.component';
import { AddreclamationComponent } from 'src/app/pages/addreclamation/addreclamation.component';
import { AddfeedbackComponent } from 'src/app/pages/addfeedback/addfeedback.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FeedbackManagementUserComponent } from 'src/app/pages/feedback-management-user/feedback-management-user.component';
import { UpdateFeedbackComponent } from 'src/app/pages/update-feedback/update-feedback.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MentionModule } from 'angular-mentions';
import { ClipboardModule } from "ngx-clipboard";
import { HomeTripComponent } from 'src/app/pages/home-trip/home-trip.component';
import { SignInComponent } from 'src/app/pages/sign-in/sign-in.component';
import { MaterialModule } from 'src/app/material.module';
import { UserManagementFrontComponent } from 'src/app/pages/user-management-front/user-management-front.component';
import { NgxPaginationModule } from 'ngx-pagination';
// import { ToastrModule } from 'ngx-toastr';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    MatDialogModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module,
    MatCardModule,
    ReactiveFormsModule,
    CommonModule,
    ClipboardModule,
    NgxSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatExpansionModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MentionModule,
    MaterialModule,
    NgxPaginationModule,
  ],

  declarations: [
    AcceuiltripComponent,
    DetailtripComponent,
    SearchdialogComponent,
    TestfaresComponent,
    FrontPublicationComponent,
    UpdatePublicationComponent,
    CommentsManagementComponent,
    UserManagementFrontComponent,
    ChatbotComponent,
    AddreclamationComponent,
    ReclamationManagementComponent,
    FeedbackManagementUserComponent,
    AddfeedbackComponent,
    DetailFeedbackUserComponent,
    UpdateFeedbackComponent,
    HomeTripComponent,
    SignInComponent
  ]
  , entryComponents:
    [NgbdModalContent]
  , exports: [
    RouterModule
  ]



})

export class UserLayoutModule { }
