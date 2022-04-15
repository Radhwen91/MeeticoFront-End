import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  focus: any;
  listTitles: any[];
  location: Location;
  username: any;
  picture: any;
  constructor(location: Location, private element: ElementRef, private router: Router, private tokenService: TokenService) {
    this.location = location;
  }
  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.username = this.tokenService.getUser().username.charAt(0).toUpperCase() + this.tokenService.getUser().username.slice(1);
    this.picture = this.tokenService.getUser().picturePath;
  }
  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice(1);
    }
    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }
  signOut() {
    this.tokenService.signOut();
    this.router.navigate(['login']);
  }
}
