import { ReclamationManagementComponent } from 'src/app/pages/reclamation-management/reclamation-management.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLayoutRoutes } from './user-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  NgbdModalContent } from 'src/app/pages/modal/modal.component';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { NouisliderModule } from 'ng2-nouislider';
import { AddreclamationComponent } from 'src/app/pages/addreclamation/addreclamation.component';
import { FeedbackManagementUserComponent } from 'src/app/pages/feedback-management-user/feedback-management-user.component';
import { AddfeedbackComponent } from 'src/app/pages/addfeedback/addfeedback.component';
import { DatailFeedbackComponent } from 'src/app/pages/datail-feedback/datail-feedback.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateFeedbackComponent } from 'src/app/pages/update-feedback/update-feedback.component';
import { NgxSpinnerModule } from 'ngx-spinner';
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
    
    
  ],
  declarations: [
    AddreclamationComponent,
    ReclamationManagementComponent,
    FeedbackManagementUserComponent,
    AddfeedbackComponent,
    DatailFeedbackComponent,
    UpdateFeedbackComponent,
    
   
  ]
  ,entryComponents: [NgbdModalContent
  ],
  exports: [
    RouterModule
  ]

  
  
})

export class UserLayoutModule {}
