import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-chart-bar-32 text-info', class: '' },
//  { path: '/icons', title: 'Icons',  icon:'ni-planet text-light', class: '' },
//  { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-light', class: '' },
//  { path: '/user-profile', title: 'User profile',  icon:'ni-circle-08 text-light', class: '' },
//  { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-light', class: '' },
//  { path: '/login', title: 'Login',  icon:'ni-key-25 text-light', class: '' },
//  { path: '/register', title: 'Register',  icon:'ni-circle-08 text-light', class: '' },
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
  constructor(private router: Router) { }
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
