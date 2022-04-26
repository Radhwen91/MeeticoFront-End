
import { Routes, RouterModule } from '@angular/router';
import { NucleoiconsComponent } from 'src/app/pages/nucleoicons/nucleoicons.component';
import { LandingComponent } from 'src/app/pages/landing/landing.component';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { SignupComponent } from 'src/app/pages/signup/signup.component';
import { AcceuiltripComponent } from 'src/app/pages/trip-management/acceuiltrip/acceuiltrip.component';


 


export const UserLayoutRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
     { path: 'landing',          component: LandingComponent },
     { path: 'nucleoicons',      component: NucleoiconsComponent },
     { path: 'aceui',      component: AcceuiltripComponent }
];
