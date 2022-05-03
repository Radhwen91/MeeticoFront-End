import { FeedbackManagementUserComponent } from './../../pages/feedback-management-user/feedback-management-user.component';

import { Routes, RouterModule } from '@angular/router';
import { NucleoiconsComponent } from 'src/app/pages/nucleoicons/nucleoicons.component';
import { LandingComponent } from 'src/app/pages/landing/landing.component';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { SignupComponent } from 'src/app/pages/signup/signup.component';
import { AddreclamationComponent } from 'src/app/pages/addreclamation/addreclamation.component';
import { ReclamationManagementComponent } from 'src/app/pages/reclamation-management/reclamation-management.component';
import { AddfeedbackComponent } from 'src/app/pages/addfeedback/addfeedback.component';


 


export const UserLayoutRoutes: Routes = [
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
