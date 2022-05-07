import { HomeTripComponent } from './../../pages/home-trip/home-trip.component';
import { FeedbackManagementUserComponent } from './../../pages/feedback-management-user/feedback-management-user.component';
import { Routes, RouterModule } from '@angular/router';
import { NucleoiconsComponent } from 'src/app/pages/nucleoicons/nucleoicons.component';
import { LandingComponent } from 'src/app/pages/landing/landing.component';
import { AcceuiltripComponent } from 'src/app/pages/trip-management/acceuiltrip/acceuiltrip.component';
import { DetailtripComponent } from 'src/app/pages/trip-management/detailtrip/detailtrip.component';
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
import { ShowEventComponent } from 'src/app/pages/show-event/show-event.component';
import { ChatComponent } from 'src/app/chat/chat.component';
import { SignInComponent } from 'src/app/pages/sign-in/sign-in.component';
import { UserProfileComponent } from 'src/app/pages/user-profile/user-profile.component';





export const UserLayoutRoutes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'user-profile',     component: UserProfileComponent },
    { path: 'sign-in',           component: SignInComponent },
     { path: 'landing',          component: LandingComponent },
     { path: 'nucleoicons',      component: NucleoiconsComponent },
     { path: 'homeTrip',      component: AcceuiltripComponent },
     { path: 'homelistTrip',      component: HomeTripComponent },
     { path: 'detail/:id',      component: DetailtripComponent },
     { path: 'testfares',      component: TestfaresComponent },
     { path: 'frontpublication',      component: FrontPublicationComponent },
     { path: 'update-publication',           component: UpdatePublicationComponent },
     { path: 'comments-management',           component: CommentsManagementComponent },
     { path: 'chatbot',           component: ChatbotComponent },
     { path: 'reclamation-management/addReclamation',   component: AddreclamationComponent },
     { path: 'reclamation-management',                  component: ReclamationManagementComponent },
     { path: 'feedback-management-user',                component: FeedbackManagementUserComponent },
     { path: 'AddFeedback',                             component: AddfeedbackComponent},
     { path: 'showevent',      component: ShowEventComponent },
     { path: 'chat',      component: ChatComponent }
     { path: 'landing',                                 component: LandingComponent },
     { path: 'nucleoicons',                             component: NucleoiconsComponent },


];
