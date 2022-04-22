import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ClipboardModule } from "ngx-clipboard";
import { MaterialModule } from "src/app/material.module";
import { DashboardComponent } from "src/app/pages/dashboard/dashboard.component";
import { IconsComponent } from "src/app/pages/icons/icons.component";
import { MapsComponent } from "src/app/pages/maps/maps.component";
import { RequestManagementComponent } from "src/app/pages/request-management/request-management.component";
import { TablesComponent } from "src/app/pages/tables/tables.component";
import { UserDetailsDialog, UserManagementComponent } from "src/app/pages/user-management/user-management.component";
import { UserProfileComponent } from "src/app/pages/user-profile/user-profile.component";
import { AdminLayoutRoutes } from "./admin-layout.routing";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AdminLayoutRoutes),
    NgbModule,
    ClipboardModule,
    MaterialModule
  ],
  declarations: [
    DashboardComponent,
    IconsComponent,
    MapsComponent,
    TablesComponent,
    UserProfileComponent,
    UserManagementComponent,
    UserDetailsDialog,
    RequestManagementComponent
  ],
  entryComponents: [UserDetailsDialog]
})

export class AdminLayoutModule {}
