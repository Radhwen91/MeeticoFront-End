import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { User } from 'src/app/_models/user';
import { DataService } from 'src/app/_services/data.service';
import { TokenService } from 'src/app/_services/token.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'ni-chart-bar-32 text-info', class: '' },
  { path: '/user-management', title: 'User Management', icon: 'ni-single-02 text-yellow', class: '' },
  { path: '/event-management', title: 'Event Management', icon: 'ni-tie-bow text-pink', class: '' },
  { path: '/feedback-management', title: 'Feedback Management', icon: 'ni-laptop text-cyan', class: '' },
  { path: '/publication-management', title: 'Publication Management', icon: 'ni-notification-70 text-blue', class: '' },
  { path: '/request-management', title: 'Request Management', icon: 'ni-badge text-black', class: '' },
  { path: '/reclamation-management', title: 'Reclamation Management', icon: 'ni-paper-diploma text-orange', class: '' },
  { path: '/trip-management', title: 'Trip Management', icon: 'ni-square-pin text-green', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  menuItems: any[];
  isCollapsed = true;
  user: User;
  socialUser: SocialUser;
  picture: string;
  constructor(private router: Router, private tokenService: TokenService, private socialAuthService: SocialAuthService, private dataService: DataService) { }
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
    this.user = this.tokenService.getUser();
    if (this.user) {
      this.socialUser = this.tokenService.getSocialUser();
      if (this.socialUser.provider == "FACEBOOK")
        this.socialUser.photoUrl = this.socialUser.response.picture.data.url;
    }
  }
  signOut() {
    if (this.socialUser)
      this.tokenService.signOut();
    else {
      this.socialAuthService.signOut();
      this.dataService.currentStatus.subscribe(isLogged => isLogged = !isLogged);
    }
    this.router.navigate(['login']);
  }
}
