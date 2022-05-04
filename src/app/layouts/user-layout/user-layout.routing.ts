import { FeedbackManagementUserComponent } from './../../pages/feedback-management-user/feedback-management-user.component';

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


import { AddreclamationComponent } from 'src/app/pages/addreclamation/addreclamation.component';
import { ReclamationManagementComponent } from 'src/app/pages/reclamation-management/reclamation-management.component';
import { AddfeedbackComponent } from 'src/app/pages/addfeedback/addfeedback.component';





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



    { path:  '', redirectTo: 'home', pathMatch: 'full' },
    { path:  'reclamation-management/addReclamation',   component: AddreclamationComponent },
    { path:  'reclamation-management',                  component: ReclamationManagementComponent },
    { path:  'feedback-management-user',                component: FeedbackManagementUserComponent },
    { path:  'AddFeedback',                             component: AddfeedbackComponent},
    { path:  'user-profile',                            component: ProfileComponent },
    { path:  'signup',                                  component: SignupComponent },
     { path: 'landing',                                 component: LandingComponent },
     { path: 'nucleoicons',                             component: NucleoiconsComponent },
     

];
