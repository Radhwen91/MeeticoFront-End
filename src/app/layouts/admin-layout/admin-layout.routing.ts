import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { EventManagementComponent } from 'src/app/pages/event-management/event-management.component';
import { FeedbackManagementComponent } from 'src/app/pages/feedback-management/feedback-management.component';
import { PublicationManagementComponent } from 'src/app/pages/publication-management/publication-management.component';
import { ReclamationManagementComponent } from 'src/app/pages/reclamation-management/reclamation-management.component';
import { UserManagementComponent } from 'src/app/pages/user-management/user-management.component';
import { TestComponent } from 'src/app/pages/test/test.component';
import { UploadImageComponent } from 'src/app/pages/upload-image/upload-image.component';
import { ReclamationManagementAdminComponent } from 'src/app/pages/reclamation-management-admin/reclamation-management-admin.component';



export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'user-management',component: UserManagementComponent },
    { path: 'event-management',component: EventManagementComponent },
    { path: 'feedback-management', component: FeedbackManagementComponent },
    { path: 'publication-management',component: PublicationManagementComponent },
    { path: 'reclamation-management-admin',component: ReclamationManagementAdminComponent },
    
    { path: 'Test',component: TestComponent },
    { path: 'test',component: UploadImageComponent},
   
]; 

