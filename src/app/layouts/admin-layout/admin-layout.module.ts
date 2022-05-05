import { TestComponent } from './../../pages/test/test.component';
import { UploadImageComponent } from './../../pages/upload-image/upload-image.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
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
import { AddfeedbackComponent } from 'src/app/pages/addfeedback/addfeedback.component';
import { ReclamationManagementComponent } from 'src/app/pages/reclamation-management/reclamation-management.component';
import { AddreclamationComponent } from 'src/app/pages/addreclamation/addreclamation.component';
import { DetailReclamationComponent } from 'src/app/pages/detail-reclamation/detail-reclamation.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdateReclamationComponent } from 'src/app/pages/update-reclamation/update-reclamation.component';
import { AnswerAdminComponent } from 'src/app/pages/answer-admin/answer-admin.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AddEventComponent } from 'src/app/pages/event-management/add-event/add-event.component';
import { CardComponent } from 'src/app/pages/event-management/card/card.component';
import { EventManagementComponent } from 'src/app/pages/event-management/event-management.component';
import { ShowUComponent } from 'src/app/pages/event-management/show-u/show-u.component';
import { UpdateComponent } from 'src/app/pages/event-management/update/update.component';
import { UploadFilesComponent } from 'src/app/pages/upload-files/upload-files.component';
import { NgxPaginationModule } from 'ngx-pagination';



// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    NgxPaginationModule,
    CommonModule,

    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    MatDialogModule,
    NgxSpinnerModule,
    MatPaginatorModule,
   
    
  
    
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    FeedbackManagementComponent,
    ReclamationManagementComponent,
    AddfeedbackComponent,
    AddreclamationComponent,
    DetailReclamationComponent,
    UpdateReclamationComponent,
    AnswerAdminComponent,
    UploadImageComponent,
    TestComponent,
    EventManagementComponent,
    AddEventComponent,
    UpdateComponent,
    CardComponent,
    ShowUComponent,
    UploadFilesComponent,
  
  ],
  exports: [
   
     RouterModule ,  NgxPaginationModule,
     CommonModule,
  ]
})

export class AdminLayoutModule {}
