import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { VerificationComponent } from './verification/verification.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './board-admin/board-admin.component';
import { ModeratorComponent } from './board-moderator/board-moderator.component';
import { UserComponent } from './board-user/board-user.component';
const routes: Routes = [
  { path: '', component: ComingSoonComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'confirm/:confirmationCode', component: VerificationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'moderator', component: ModeratorComponent },
  { path: 'user', component: UserComponent },
  { path: '', redirectTo: '', pathMatch: 'prefix' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }