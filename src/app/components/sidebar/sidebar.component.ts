import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { TokenService } from 'src/app/_services/token.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-chart-bar-32 text-info', class: '' },
    { path: '/user-management', title: 'User Management',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/event-management', title: 'Event Management',  icon:'ni-tie-bow text-pink', class: '' },
    { path: '/feedback-management', title: 'Feedback Management',  icon:'ni-laptop text-cyan', class: '' },
    { path: '/publication-management', title: 'Publication Management',  icon:'ni-notification-70 text-blue', class: '' },
    { path: '/reclamation-management', title: 'Reclamation Management',  icon:'ni-paper-diploma text-orange', class: '' },
    { path: '/trip-management', title: 'Trip Management',  icon:'ni-square-pin text-green', class: '' }
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
  constructor(private router: Router, private tokenService: TokenService) { }
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
   this.user = this.tokenService.getUser();
  }
  signOut() {
    this.tokenService.signOut();
    this.router.navigate(['login']);
  }
}
