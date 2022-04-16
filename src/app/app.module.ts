import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { TripManagementComponent } from './pages/trip-management/trip-management.component';
import { AjouterComponent } from './pages/trip-management/ajouter/ajouter.component';
import { ModifierComponent } from './pages/trip-management/modifier/modifier.component';
import { UploadFilesComponent } from './pages/trip-management/upload-files/upload-files.component';
import { AlgorithmedematchingComponent } from './pages/trip-management/algorithmedematching/algorithmedematching.component';





@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    TripManagementComponent,
    AjouterComponent,
    ModifierComponent,
    UploadFilesComponent,
    AlgorithmedematchingComponent

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
