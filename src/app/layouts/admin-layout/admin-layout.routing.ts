import { Routes } from "@angular/router";
import { IconsComponent } from "src/app/pages/icons/icons.component";
import { MapsComponent } from "src/app/pages/maps/maps.component";
import { TablesComponent } from "src/app/pages/tables/tables.component";
import { DashboardComponent } from "src/app/pages/dashboard/dashboard.component";
import { UserProfileComponent } from "src/app/pages/user-profile/user-profile.component";
import { UserManagementComponent } from "src/app/pages/user-management/user-management.component";
import { EventManagementComponent } from "src/app/pages/event-management/event-management.component";
import { FeedbackManagementComponent } from "src/app/pages/feedback-management/feedback-management.component";
import { PublicationManagementComponent } from "src/app/pages/publication-management/publication-management.component";
import { ReclamationManagementComponent } from "src/app/pages/reclamation-management/reclamation-management.component";
import { TripManagementComponent } from "src/app/pages/trip-management/trip-management.component";

export const AdminLayoutRoutes: Routes = [
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'user-management',           component: UserManagementComponent },
    { path: 'event-management',           component: EventManagementComponent },
    { path: 'feedback-management',           component: FeedbackManagementComponent },
    { path: 'publication-management',           component: PublicationManagementComponent },
    { path: 'reclamation-management',           component: ReclamationManagementComponent },
    { path: 'trip-management',           component: TripManagementComponent }
];
