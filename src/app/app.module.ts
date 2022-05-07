import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ListCommentComponent } from './pages/publication-management/front-publication/list-comment/list-comment.component';
import {AuthLayoutModule} from "./layouts/auth-layout/auth-layout.module";
import {MatMenuModule} from "@angular/material/menu";
import { ToastrModule} from "ngx-toastr";
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { PubLayoutModule } from './layouts/pub-layout/pub-layout.module';
import { ChatComponent } from './chat/chat.component';
import { HomeTripComponent } from './pages/home-trip/home-trip.component';
import { GoogleLoginProvider, FacebookLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { NgxPaginationModule } from 'ngx-pagination';
import { PubLayoutComponent } from './layouts/pub-layout/pub-layout.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule,
    AuthLayoutModule,
    MatMenuModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    UserLayoutComponent,
    ListCommentComponent,
    ChatComponent,
    PubLayoutComponent,
 

  ],
  providers: [ 
     {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('1028321610820-vdnmdsjqa5bc3fmi7lf63ddq04im9uqr.apps.googleusercontent.com'),
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('523508609397728'),
        },
      ],
    } as SocialAuthServiceConfig,
  }, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
