import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { User } from 'src/app/_models/user';
import { DataService } from 'src/app/_services/data.service';
import { TokenService } from 'src/app/_services/token.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  hidePassword = true;
  credentials: Partial<User> = {
    username: null,
    password: null
  };
  isLoggedin: boolean;
  constructor(private userService: UserService, private tokenService: TokenService, private router: Router, private socialAuthService: SocialAuthService, private dataService: DataService) { }
  ngOnInit(): void {
    this.dataService.currentStatus.subscribe(loggedIn => this.isLoggedin = loggedIn);
    this.socialAuthService.authState.subscribe(
      user => {
        if (this.isLoggedin) {
          this.tokenService.saveSocialUser(user);
          if (user.provider == "GOOGLE") this.tokenService.saveToken(user.idToken);
          else this.tokenService.saveToken(user.authToken);
          this.router.navigate(['dashboard']);
        }
      }
    );
  }
  ngSubmit(): void {
    this.userService.authenticateUser(this.credentials).subscribe(
      userDetails => {
        this.tokenService.saveToken(userDetails.accessToken);
        this.tokenService.saveUser(userDetails.user);
        this.router.navigate(['dashboard']);
      }
    );
  }
  GoogleAuthentication(): void {
    if (this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)) {
      this.dataService.currentStatus.subscribe(loggedIn => this.isLoggedin = !loggedIn);
    }
  }
  FacebookAuthentication(): void {
    if (this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID)) {
      this.dataService.currentStatus.subscribe(loggedIn => this.isLoggedin = !loggedIn);
    }
  }
}
