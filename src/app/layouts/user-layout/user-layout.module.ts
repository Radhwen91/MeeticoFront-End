import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { UserLayoutRoutes } from './user-layout.routing';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdModalContent } from 'src/app/pages/modal/modal.component';



import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { NouisliderModule } from 'ng2-nouislider';
import { AcceuiltripComponent } from 'src/app/pages/trip-management/acceuiltrip/acceuiltrip.component';
// import { ToastrModule } from 'ngx-toastr';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { DetailtripComponent } from 'src/app/pages/trip-management/detailtrip/detailtrip.component';

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
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
  
    
  ],
  declarations: [
    AcceuiltripComponent,
    DetailtripComponent
    
   
    
   
  ],
  entryComponents: [NgbdModalContent],
  exports: [
    RouterModule
  ],
  
  
})

export class UserLayoutModule {}
