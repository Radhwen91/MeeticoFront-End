import { Routes } from "@angular/router";
import { BasicelementsComponent } from "src/app/pages/basicelements/basicelements.component";
import { HomeComponent } from "src/app/pages/home/home.component";
import { LandingComponent } from "src/app/pages/landing/landing.component";
import { NavigationComponent } from "src/app/pages/navigation/navigation.component";
import { NotificationComponent } from "src/app/pages/notification/notification.component";
import { SignInComponent } from "src/app/pages/sign-in/sign-in.component";
import { TypographyComponent } from "src/app/pages/typography/typography.component";
import { UserManagementFrontComponent } from "src/app/pages/user-management-front/user-management-front.component";
import { UserProfileComponent } from "src/app/pages/user-profile/user-profile.component";

export const UserLayoutRoutes: Routes = [
    { path: 'home',     component: HomeComponent},
    { path: 'sign-in',           component: SignInComponent },
    { path: 'user-profile',     component: UserProfileComponent },
    { path: 'manage-users',      component: UserManagementFrontComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'notification',     component: NotificationComponent },
    { path: 'basicelements',           component: BasicelementsComponent },
    { path: 'navigation',          component: NavigationComponent },
    { path: 'typography',      component: TypographyComponent }
];
