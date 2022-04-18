import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { authInterceptorProviders } from "./_helpers/auth.interceptor";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    NgbModule,
    AppRoutingModule,
    ComponentsModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})

export class AppModule { }
