import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserLayoutRoutes } from './user-layout.routing';
import { MaterialModule } from 'src/app/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from 'src/app/pages/landing/landing.component';
import { UserProfileComponent } from 'src/app/pages/user-profile/user-profile.component';
import { SignInComponent } from 'src/app/pages/sign-in/sign-in.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { UserManagementFrontComponent } from 'src/app/pages/user-management-front/user-management-front.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserLayoutRoutes),
    FormsModule,
    HttpClientModule,
    MaterialModule,
    NgbModule
  ],
  declarations: [
    HomeComponent,
    SignInComponent,
    UserProfileComponent,
    UserManagementFrontComponent,
    LandingComponent
  ]
})

export class UserLayoutModule {}
