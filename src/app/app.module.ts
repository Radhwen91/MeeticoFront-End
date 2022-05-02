import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { AcceuiltripComponent } from './pages/trip-management/acceuiltrip/acceuiltrip.component';
import { ImageComponent } from './pages/trip-management/image/image.component';
import { DetailtripComponent } from './pages/trip-management/detailtrip/detailtrip.component';
import { SearchdialogComponent } from './pages/trip-management/searchdialog/searchdialog.component';
import { AcceuiltripbackComponent } from './pages/trip-management/acceuiltripback/acceuiltripback.component';
import { DetailtripbackComponent } from './pages/trip-management/detailtripback/detailtripback.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    UserLayoutComponent,
    
   
    
    
    
  

  ],
  providers: [  {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
