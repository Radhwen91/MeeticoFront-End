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
import { AcceuiltripComponent } from 'src/app/pages/trip-management/acceuiltrip/acceuiltrip.component';
// import { ToastrModule } from 'ngx-toastr';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module,
    MatPaginatorModule,
  
    
  ],
  declarations: [
    AcceuiltripComponent,
   
    
   
  ]
  ,entryComponents: [NgbdModalContent]
  
  
})

export class UserLayoutModule {}
