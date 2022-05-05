import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserManagementComponent } from '../pages/user-management/user-management.component';
import { FooterFrontComponent } from './footer-front/footer-front.component';
import { NavbarFrontComponent } from './navbar-front/navbar-front.component';
import { NotificationComponent } from '../pages/notification/notification.component';
import { NgbdModalComponent, NgbdModalContent } from '../pages/modal/modal.component';
import { NucleoiconsComponent } from '../pages/nucleoicons/nucleoicons.component';
import { TypographyComponent } from '../pages/typography/typography.component';
import { BasicelementsComponent } from '../pages/basicelements/basicelements.component';
import { NavigationComponent } from '../pages/navigation/navigation.component';
import { AppRoutingModule } from '../app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    

    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    
    
    
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    UserManagementComponent,
    NavbarFrontComponent,
    FooterFrontComponent,
    NotificationComponent,
    BasicelementsComponent,
    NavigationComponent,
    TypographyComponent,
    NucleoiconsComponent,
    
    NgbdModalComponent,
    NgbdModalContent,
    
    

    

  ],
  exports: [
  

    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    UserManagementComponent,
    NavbarFrontComponent,
    FooterFrontComponent,
    NotificationComponent,
    BasicelementsComponent,
    NavigationComponent,
    TypographyComponent,
    NucleoiconsComponent,
    
    NgbdModalComponent,
    NgbdModalContent,
    MatFormFieldModule,
    MatInputModule,
    


  ]
})
export class ComponentsModule { }
