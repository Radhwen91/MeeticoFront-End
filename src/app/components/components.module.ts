import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent, SidebarPasswordDialog } from './sidebar/sidebar.component';
import { NavbarComponent, NavbarPasswordDialog } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { UserManagementComponent } from '../pages/user-management/user-management.component';
import { TypographyComponent } from '../pages/typography/typography.component';
import { BasicelementsComponent } from '../pages/basicelements/basicelements.component';
import { FooterFrontComponent } from './footer-front/footer-front.component';
import { NavbarFrontComponent, NavbarFrontPasswordDialog } from './navbar-front/navbar-front.component';
import { NavigationComponent } from '../pages/navigation/navigation.component';
import { NgbdModalComponent, NgbdModalContent } from '../pages/modal/modal.component';
import { NucleoiconsComponent } from '../pages/nucleoicons/nucleoicons.component';
import { UpdateRequestDialog, UserManagementFrontComponent } from '../pages/user-management-front/user-management-front.component';
import { NgbdModalFrontVerification } from '../pages/verification-front/verification-front.component';
import { NgbdModalVerification } from '../pages/verification/verification.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    NavbarFrontComponent,
    FooterFrontComponent,
    BasicelementsComponent,
    NavigationComponent,
    TypographyComponent,
    NucleoiconsComponent,
    NgbdModalComponent,
    NgbdModalContent,
    NavbarFrontPasswordDialog,
    NgbdModalVerification,
    NgbdModalFrontVerification,
    UpdateRequestDialog,
    NavbarPasswordDialog,
    SidebarPasswordDialog,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    NavbarFrontComponent,
    FooterFrontComponent,
    BasicelementsComponent,
    NavigationComponent,
    TypographyComponent,
    NucleoiconsComponent,
    NgbdModalComponent,
    NgbdModalContent,
    NavbarPasswordDialog,
    NgbdModalVerification,
    NgbdModalFrontVerification,
    UpdateRequestDialog,
    SidebarPasswordDialog,
  ],
  entryComponents: [
    NgbdModalContent,
    NavbarFrontPasswordDialog,
    NgbdModalVerification,
    NgbdModalFrontVerification
  ]
})
export class ComponentsModule { }
