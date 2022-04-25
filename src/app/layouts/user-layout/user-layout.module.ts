import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { UserLayoutRoutes } from './user-layout.routing';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BasicelementsComponent } from 'src/app/pages/basicelements/basicelements.component';
import { NavigationComponent } from 'src/app/pages/navigation/navigation.component';
import { NgbdModalComponent, NgbdModalContent } from 'src/app/pages/modal/modal.component';
import { NotificationComponent } from 'src/app/pages/notification/notification.component';
import { NucleoiconsComponent } from 'src/app/pages/nucleoicons/nucleoicons.component';

import { TypographyComponent } from 'src/app/pages/typography/typography.component';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { NouisliderModule } from 'ng2-nouislider';
import {TestfaresComponent} from "../../pages/testfares/testfares.component";
import {
  FrontPublicationComponent
} from "../../pages/publication-management/front-publication/front-publication.component";
import {
  UpdatePublicationComponent
} from "../../pages/publication-management/front-publication/update-publication/update-publication.component";
import {AdminLayoutRoutes} from "../admin-layout/admin-layout.routing";
import {MatDialogModule} from "@angular/material/dialog";
import {NgxSpinnerModule} from "ngx-spinner";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatExpansionModule} from "@angular/material/expansion";
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module,
    CommonModule,




    ClipboardModule,
    MatDialogModule,
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
    TestfaresComponent,
    FrontPublicationComponent,
    UpdatePublicationComponent,

  ]
  ,entryComponents: [NgbdModalContent]


})

export class UserLayoutModule {}
