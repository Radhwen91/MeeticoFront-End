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
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatExpansionModule} from "@angular/material/expansion";
import {PublicationManagementComponent} from "../../pages/publication-management/publication-management.component";
import {
  UpdatePublicationBackComponent
} from "../../pages/publication-management/update-publication-back/update-publication-back.component";
import {
  ListCommentsBackComponent
} from "../../pages/publication-management/list-comments-back/list-comments-back.component";
import {
  PublicationAjoutComponent
} from "../../pages/publication-management/publication-ajout/publication-ajout.component";


// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
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
    PublicationManagementComponent,
    UpdatePublicationBackComponent,
    ListCommentsBackComponent,
    PublicationAjoutComponent,
  ],
  exports: [
    RouterModule
  ]
})

export class AdminLayoutModule {}
