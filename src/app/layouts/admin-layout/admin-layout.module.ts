
import { DetailFeedbackComponent } from './../../pages/detail-feedback/detail-feedback.component';
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
import {MatCardModule} from '@angular/material/card';
import { TripManagementComponent } from 'src/app/pages/trip-management/trip-management.component';
import { ImageComponent } from 'src/app/pages/trip-management/image/image.component';
import { AjouterComponent } from 'src/app/pages/trip-management/ajouter/ajouter.component';
import { AlgorithmedematchingComponent } from 'src/app/pages/trip-management/algorithmedematching/algorithmedematching.component';
import { ModifierComponent } from 'src/app/pages/trip-management/modifier/modifier.component';
import { UploadFilesComponent } from 'src/app/pages/trip-management/upload-files/upload-files.component';
import { AcceuiltripbackComponent } from 'src/app/pages/trip-management/acceuiltripback/acceuiltripback.component';
import { DetailtripbackComponent } from 'src/app/pages/trip-management/detailtripback/detailtripback.component';
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
import {
  AlertsManagementComponent
} from "../../pages/publication-management/alerts-management/alerts-management.component";
import { AnswerAdminComponent } from 'src/app/pages/answer-admin/answer-admin.component';
import { DetailReclamationComponent } from 'src/app/pages/detail-reclamation/detail-reclamation.component';
import { ReclamationManagementAdminComponent } from 'src/app/pages/reclamation-management-admin/reclamation-management-admin.component';
import { AddEventComponent } from 'src/app/pages/event-management/add-event/add-event.component';
import { CardComponent } from 'src/app/pages/event-management/card/card.component';
import { ShowUComponent } from 'src/app/pages/event-management/show-u/show-u.component';
import { UpdateComponent } from 'src/app/pages/event-management/update/update.component';
import { AdminProfileComponent } from 'src/app/pages/admin-profile/admin-profile.component';
import { CalendarComponent } from 'src/app/pages/calendar/calendar.component';
import { RequestManagementComponent } from 'src/app/pages/request-management/request-management.component';
import { UserManagementComponent, UserDetailsDialog } from 'src/app/pages/user-management/user-management.component';
import { VerificationComponent } from 'src/app/pages/verification/verification.component';
import { MaterialModule } from 'src/app/material.module';
import { NgxPaginationModule } from "ngx-pagination";
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';







 import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgbModule,
    ClipboardModule,
    NgxPaginationModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    NgxSpinnerModule,
    MatPaginatorModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatExpansionModule,
    CommonModule,
    NgxPaginationModule,
    MaterialModule,
    ToastrModule

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
    TestComponent,
    TripManagementComponent,
    ImageComponent,
    AjouterComponent,
    AlgorithmedematchingComponent,
    ModifierComponent,
    UploadFilesComponent,
    AcceuiltripbackComponent,
    DetailtripbackComponent,
    PublicationManagementComponent,
    UpdatePublicationBackComponent,
    ListCommentsBackComponent,
    PublicationAjoutComponent,
    AlertsManagementComponent,
    DetailFeedbackComponent,
    AddEventComponent,
    UpdateComponent,
    CardComponent,
    ShowUComponent,
    UploadFilesComponent,
    CalendarComponent,
    AdminProfileComponent,
    UserDetailsDialog,
    RequestManagementComponent,
    VerificationComponent,
    UserManagementComponent
  ],
  exports: [
    CalendarComponent,
    RouterModule
  ],
  entryComponents: [UserDetailsDialog]

})

export class AdminLayoutModule {}
