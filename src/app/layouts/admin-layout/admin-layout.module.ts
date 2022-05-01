import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ClipboardModule } from "ngx-clipboard";
import { NgxPaginationModule } from "ngx-pagination";
import { MaterialModule } from "src/app/material.module";
import { CalendarComponent } from "src/app/pages/calendar/calendar.component";
import { DashboardComponent } from "src/app/pages/dashboard/dashboard.component";
import { IconsComponent } from "src/app/pages/icons/icons.component";
import { MapsComponent } from "src/app/pages/maps/maps.component";
import { RequestManagementComponent } from "src/app/pages/request-management/request-management.component";
import { TablesComponent } from "src/app/pages/tables/tables.component";
import { UserManagementComponent, UserDetailsDialog } from "src/app/pages/user-management/user-management.component";
import { AdminProfileComponent } from "src/app/pages/admin-profile/admin-profile.component";
import { AdminLayoutRoutes } from "./admin-layout.routing";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AdminLayoutRoutes),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgbModule,
    ClipboardModule,
    NgxPaginationModule,
    MaterialModule
  ],
  declarations: [
    DashboardComponent,
    IconsComponent,
    MapsComponent,
    TablesComponent,
    CalendarComponent,
    AdminProfileComponent,
    UserManagementComponent,
    UserDetailsDialog,
    RequestManagementComponent
  ],
  exports : [CalendarComponent],
  entryComponents: [UserDetailsDialog]
})

export class AdminLayoutModule {}
