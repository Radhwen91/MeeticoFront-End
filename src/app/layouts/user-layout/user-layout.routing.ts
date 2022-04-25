
import { Routes, RouterModule } from '@angular/router';
import { NucleoiconsComponent } from 'src/app/pages/nucleoicons/nucleoicons.component';
import { LandingComponent } from 'src/app/pages/landing/landing.component';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { SignupComponent } from 'src/app/pages/signup/signup.component';
import {TestfaresComponent} from "../../pages/testfares/testfares.component";
import {
  FrontPublicationComponent
} from "../../pages/publication-management/front-publication/front-publication.component";
import {
  UpdatePublicationComponent
} from "../../pages/publication-management/front-publication/update-publication/update-publication.component";
import {CommentsManagementComponent} from "../../pages/comments-management/comments-management.component";
import {ChatbotComponent} from "../../pages/publication-management/chatbot/chatbot.component";





export const UserLayoutRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
     { path: 'landing',          component: LandingComponent },
     { path: 'nucleoicons',      component: NucleoiconsComponent },
  { path: 'testfares',      component: TestfaresComponent },
  { path: 'frontpublication',      component: FrontPublicationComponent },
  { path: 'update-publication',           component: UpdatePublicationComponent },
  { path: 'comments-management',           component: CommentsManagementComponent },
  { path: 'chatbot',           component: ChatbotComponent },
  ,

];
