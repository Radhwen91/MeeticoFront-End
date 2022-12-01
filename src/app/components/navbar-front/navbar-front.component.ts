import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';








declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [

    { path: '/reclamation-management', title: 'Reclamations',  icon: 'ni-chart-bar-32 text-info', class: '' },
     { path: '/homeTrip', title: 'Events',  icon:'ni-tie-bow text-pink', class: '' },
     { path: '/feedback-management-user', title: 'Feedbacks',  icon:'ni-laptop text-black', class: '' },
     { path: '/home', title: 'Forum',  icon:'ni-notification-70 text-blue', class: '' },
     { path: '/homeTrip', title: 'Trip ',  icon:'ni-square-pin text-green', class: '' }
];



@Component({
    selector: 'app-navbar-front',
    templateUrl: './navbar-front.component.html',
    styleUrls: ['./navbar-front.component.scss']
})
export class NavbarFrontComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;
    public menuItemsFRONT: any[];
  public isCollapsed = true;
    constructor(public location: Location, private element : ElementRef,private router: Router) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];

        this.menuItemsFRONT = ROUTES.filter(menuItem => menuItem);
        this.router.events.subscribe((event) => {
          this.isCollapsed = true;
       });
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');

        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };
    isHome() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
        if( titlee === '/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
        if( titlee === '/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }
}
