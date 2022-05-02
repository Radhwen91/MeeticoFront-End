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
import { ViewChild} from '@angular/core';;
import {MatSort, SortDirection} from '@angular/material/sort';
import { MatTableDataSource,MatTableModule } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

import { MatChipsModule } from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { TripManagementComponent } from 'src/app/pages/trip-management/trip-management.component';
import { ImageComponent } from 'src/app/pages/trip-management/image/image.component';
import { AjouterComponent } from 'src/app/pages/trip-management/ajouter/ajouter.component';
import { AlgorithmedematchingComponent } from 'src/app/pages/trip-management/algorithmedematching/algorithmedematching.component';
import { ModifierComponent } from 'src/app/pages/trip-management/modifier/modifier.component';
import { UploadFilesComponent } from 'src/app/pages/trip-management/upload-files/upload-files.component';
import { AcceuiltripbackComponent } from 'src/app/pages/trip-management/acceuiltripback/acceuiltripback.component';


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
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    
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
    TripManagementComponent,
    ImageComponent,
    AjouterComponent,
    AlgorithmedematchingComponent,
    ModifierComponent,
    UploadFilesComponent,
    AcceuiltripbackComponent,
  ],
  exports: [
    RouterModule
  ]
})

export class AdminLayoutModule {}
