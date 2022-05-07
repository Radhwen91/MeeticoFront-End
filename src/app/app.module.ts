import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {  PubLayoutComponent } from './layouts/pub-layout/pub-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ListCommentComponent } from './pages/publication-management/front-publication/list-comment/list-comment.component';

import {MatMenuModule} from "@angular/material/menu";
import { ToastrModule} from "ngx-toastr";
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { PubLayoutModule } from './layouts/pub-layout/pub-layout.module';
import { ChatComponent } from './chat/chat.component';









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
    PubLayoutModule,
    MatMenuModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    PubLayoutComponent,
    UserLayoutComponent,
    ListCommentComponent,
    ChatComponent

    



  ],
  providers: [ {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
