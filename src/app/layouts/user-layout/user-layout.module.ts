import { DetailFeedbackUserComponent } from './../../pages/detail-feedback-user/detail-feedback-user.component';
import { ReclamationManagementComponent } from 'src/app/pages/reclamation-management/reclamation-management.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLayoutRoutes } from './user-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from 'src/app/pages/modal/modal.component';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { NouisliderModule } from 'ng2-nouislider';
import { AddreclamationComponent } from 'src/app/pages/addreclamation/addreclamation.component';
import { AddfeedbackComponent } from 'src/app/pages/addfeedback/addfeedback.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxSpinnerModule } from 'ngx-spinner';

import { FeedbackManagementUserComponent } from 'src/app/pages/feedback-management-user/feedback-management-user.component';
import { UpdateFeedbackComponent } from 'src/app/pages/update-feedback/update-feedback.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MentionModule } from 'angular-mentions';
import { DetailFeedbackComponent } from 'src/app/pages/detail-feedback/detail-feedback.component';
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
    NgxSpinnerModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MentionModule,
    
    


  ],

  declarations: [
    AddreclamationComponent,
    ReclamationManagementComponent,
    FeedbackManagementUserComponent,
    AddfeedbackComponent,
    DetailFeedbackUserComponent,
    UpdateFeedbackComponent,
    
  ],
  entryComponents: [NgbdModalContent],
  exports: [
    RouterModule
  ]
})

export class UserLayoutModule {}
