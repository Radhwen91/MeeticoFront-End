import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { EventManagementComponent } from 'src/app/pages/event-management/event-management.component';
import { FeedbackManagementComponent } from 'src/app/pages/feedback-management/feedback-management.component';
import { PublicationManagementComponent } from 'src/app/pages/publication-management/publication-management.component';
import { UserManagementComponent } from 'src/app/pages/user-management/user-management.component';
import { TestComponent } from 'src/app/pages/test/test.component';
import { UploadImageComponent } from 'src/app/pages/upload-image/upload-image.component';
import { AjouterComponent } from 'src/app/pages/trip-management/ajouter/ajouter.component';
import { ModifierComponent } from 'src/app/pages/trip-management/modifier/modifier.component';
import { AlgorithmedematchingComponent } from 'src/app/pages/trip-management/algorithmedematching/algorithmedematching.component';
import { ImageComponent } from 'src/app/pages/trip-management/image/image.component';
import { AcceuiltripbackComponent } from 'src/app/pages/trip-management/acceuiltripback/acceuiltripback.component';
import { DetailtripbackComponent } from 'src/app/pages/trip-management/detailtripback/detailtripback.component';

import {
  UpdatePublicationBackComponent
} from "../../pages/publication-management/update-publication-back/update-publication-back.component";
import {
  ListCommentsBackComponent
} from "../../pages/publication-management/list-comments-back/list-comments-back.component";
import {
  PublicationAjoutComponent
} from "../../pages/publication-management/publication-ajout/publication-ajout.component";
import {
  AlertsManagementComponent
} from "../../pages/publication-management/alerts-management/alerts-management.component";

import { ReclamationManagementAdminComponent } from 'src/app/pages/reclamation-management-admin/reclamation-management-admin.component';
import {AddreclamationComponent} from "../../pages/addreclamation/addreclamation.component";
import {AddfeedbackComponent} from "../../pages/addfeedback/addfeedback.component";
import { TripManagementComponent } from 'src/app/pages/trip-management/trip-management.component';
import { ChatComponent } from 'src/app/chat/chat.component';
import { UpdateComponent } from 'src/app/pages/event-management/update/update.component';
import { AddEventComponent } from 'src/app/pages/event-management/add-event/add-event.component';
import { ShowUComponent } from 'src/app/pages/event-management/show-u/show-u.component';
import { AdminProfileComponent } from 'src/app/pages/admin-profile/admin-profile.component';
import { CalendarComponent } from 'src/app/pages/calendar/calendar.component';
import { ReclamationManagementComponent } from 'src/app/pages/reclamation-management/reclamation-management.component';
import { RequestManagementComponent } from 'src/app/pages/request-management/request-management.component';
import { VerificationComponent } from 'src/app/pages/verification/verification.component';




export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',               component: DashboardComponent },
    { path: 'user-profile',            component: UserProfileComponent },
    { path: 'tables',                 component: TablesComponent },
    { path: 'icons',                  component: IconsComponent },
    { path: 'maps',                   component: MapsComponent },
    { path: 'user-management',        component: UserManagementComponent },
    { path: 'event-management',           component: EventManagementComponent },
    { path: 'feedback-management',           component: FeedbackManagementComponent },
 //   { path: 'reclamation-management',           component: ReclamationManagementComponent },
  { path: 'alert-management',           component: AlertsManagementComponent },
   // { path: 'trip-management',           component: TripManagementComponent },
    { path: 'reclamation-management/addReclamation',           component: AddreclamationComponent },
    { path: 'Test',           component: TestComponent },
    { path: 'feedback-management/AddFeedback',           component: AddfeedbackComponent},
    { path: 'test',           component: UploadImageComponent},
    { path: 'trip-management',           component: TripManagementComponent },
    { path: 'trip-management/add',           component: AjouterComponent },
    { path: 'trip-management/modifier/:id',           component: ModifierComponent },
    { path: 'trip-management/search',           component: AlgorithmedematchingComponent },
    { path: 'trip-management/image/:id',           component: ImageComponent },
    { path: 'acceuiltrip',           component: AcceuiltripbackComponent },
    { path: 'detailback/:id',      component: DetailtripbackComponent },

    { path: 'update-publication-back',           component: UpdatePublicationBackComponent },
    { path: 'list-comments-back',           component: ListCommentsBackComponent },
    { path: 'publication-ajout',           component: PublicationAjoutComponent },
    { path: 'publication-management',component: PublicationManagementComponent },
    { path: 'reclamation-management-admin', component: ReclamationManagementAdminComponent },
 
    { path: 'event-management/addevent',           component: AddEventComponent },
    { path: 'event-management/edit/:id',           component: UpdateComponent },
    { path: 'event-management/showusers/:id',           component: ShowUComponent },
    { path: 'chat',           component: ChatComponent },

  { path: 'user-management',component: UserManagementComponent },
  { path: 'event-management',component: EventManagementComponent },
  { path: 'feedback-management', component: FeedbackManagementComponent },
  
  { path: 'calendar',           component: CalendarComponent },
  { path: 'verification',       component: VerificationComponent },
  { path: 'admin-profile',   component: AdminProfileComponent },
  { path: 'request-management',           component: RequestManagementComponent }

];





