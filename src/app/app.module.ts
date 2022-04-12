  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { FormsModule } from '@angular/forms'; 
  import { HttpClientModule } from '@angular/common/http';
  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { ComingSoonComponent } from './coming-soon/coming-soon.component';
  import { RegisterComponent } from './register/register.component';
  import { RegisterDialog } from './_dialogs/register.dialog';
  import { VerificationComponent } from './verification/verification.component';
  import { LoginComponent } from './login/login.component';
  import { HomeComponent } from './home/home.component';
  import { ProfileComponent } from './profile/profile.component';
  import { AdminComponent } from './board-admin/board-admin.component';
  import { ModeratorComponent } from './board-moderator/board-moderator.component';
  import { UserComponent } from './board-user/board-user.component';
  import { authInterceptorProviders } from './_helpers/auth.interceptor';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { MaterialModule } from './material.module';
  import { FilterPipe } from './_pipes/filter.pipe';
  import { HighlightDirective } from './_directives/highlight.directive';
  @NgModule({
    declarations: [
      AppComponent,
      ComingSoonComponent,
      RegisterComponent,
      RegisterDialog,
      VerificationComponent,
      LoginComponent,
      HomeComponent,
      ProfileComponent,
      AdminComponent,
      ModeratorComponent,
      UserComponent,
      FilterPipe,
      HighlightDirective
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MaterialModule
    ],
    providers: [authInterceptorProviders],
    bootstrap: [AppComponent]
  })
  export class AppModule { }