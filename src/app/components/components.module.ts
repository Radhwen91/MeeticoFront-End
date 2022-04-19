
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserManagementComponent } from '../pages/user-management/user-management.component';
import { ReclamationManagementComponent } from '../pages/reclamation-management/reclamation-management.component';
import { FooterFrontComponent } from './footer-front/footer-front.component';
import { NavbarFrontComponent } from './navbar-front/navbar-front.component';
import { NotificationComponent } from '../pages/notification/notification.component';
import { NgbdModalComponent, NgbdModalContent } from '../pages/modal/modal.component';
import { NucleoiconsComponent } from '../pages/nucleoicons/nucleoicons.component';
import { TypographyComponent } from '../pages/typography/typography.component';
import { BasicelementsComponent } from '../pages/basicelements/basicelements.component';
import { NavigationComponent } from '../pages/navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    UserManagementComponent,
    ReclamationManagementComponent,
    NavbarFrontComponent,
    FooterFrontComponent,
    NotificationComponent,
    BasicelementsComponent,
    NavigationComponent,
    TypographyComponent,
    NucleoiconsComponent,
    
    NgbdModalComponent,
    NgbdModalContent
    
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    UserManagementComponent,
    ReclamationManagementComponent,
    NavbarFrontComponent,
    FooterFrontComponent,
    NotificationComponent,
    BasicelementsComponent,
    NavigationComponent,
    TypographyComponent,
    NucleoiconsComponent,
    
    NgbdModalComponent,
    NgbdModalContent
  ]
})
export class ComponentsModule { }
