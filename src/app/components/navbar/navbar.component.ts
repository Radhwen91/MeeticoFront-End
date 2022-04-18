import { Location } from '@angular/common';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/_services/token.service';
import { ROUTES } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  location: Location;
  titles: any[];
  picture: string;
  username: string;
  constructor(location: Location, private tokenService: TokenService, private router: Router) {
    this.location = location;
  }
  ngOnInit(): void {
    this.titles = ROUTES.filter(title => title);
    this.picture = this.tokenService.getUser().picturePath;
    this.username = this.tokenService.getUser().username.charAt(0).toUpperCase() + this.tokenService.getUser().username.slice(1);
  }
  getTitle(): string {
    var title = this.location.prepareExternalUrl(this.location.path());
    if (title.charAt(0) === '#') {
      title = title.slice(1);
    }
    for (var item = 0; item < this.titles.length; item++) {
      if (this.titles[item].path === title) {
        return this.titles[item].title;
      }
    }
    return 'Dashboard';
  }
  signOut() {
    this.tokenService.signOut();
    this.router.navigate(['login']);
  }
}
