import { TestComponent } from './../../pages/test/test.component';
import { UploadImageComponent } from './../../pages/upload-image/upload-image.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackManagementComponent } from 'src/app/pages/feedback-management/feedback-management.component';

import {MatDialogModule} from '@angular/material/dialog';
import { UpdateReclamationComponent } from 'src/app/pages/update-reclamation/update-reclamation.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AnswerAdminComponent } from 'src/app/pages/answer-admin/answer-admin.component';
import { DetailReclamationComponent } from 'src/app/pages/detail-reclamation/detail-reclamation.component';
import { ReclamationManagementAdminComponent } from 'src/app/pages/reclamation-management-admin/reclamation-management-admin.component';



// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    MatDialogModule,
    NgxSpinnerModule,
    MatPaginatorModule,
    ReactiveFormsModule
    
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    FeedbackManagementComponent,
    ReclamationManagementAdminComponent,
    DetailReclamationComponent,
    UpdateReclamationComponent,
    AnswerAdminComponent,
    UploadImageComponent,
    TestComponent
  ],
  exports: [
    RouterModule
  ]
})

export class AdminLayoutModule {}
