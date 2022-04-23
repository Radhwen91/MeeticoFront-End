import { Location } from '@angular/common';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { User } from 'src/app/_models/user';
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
  user: User;
  socialUser: SocialUser;
  picture: string;
  constructor(location: Location, private tokenService: TokenService, private router: Router, private socialAuthService: SocialAuthService) {
    this.location = location;
  }
  ngOnInit(): void {
    this.titles = ROUTES.filter(title => title);
    this.user = this.tokenService.getUser();
    if (this.user) {
      this.socialUser = this.tokenService.getSocialUser();
      if (this.socialUser.provider == "FACEBOOK")
        this.socialUser.photoUrl = this.socialUser.response.picture.data.url;
    }
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
    if (this.socialUser)
      this.tokenService.signOut();
    else
      this.socialAuthService.signOut();
    this.router.navigate(['login']);
  }
}
