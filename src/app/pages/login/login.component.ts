import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

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
  isLoggedIn: boolean;
  constructor(private userService: UserService, private tokenService: TokenService, private router: Router, private socialAuthService: SocialAuthService, private dataService: DataService) { }
  ngOnInit(): void {
    this.dataService.currentStatus.subscribe(loggedIn => this.isLoggedIn = loggedIn);
    this.socialAuthService.authState.subscribe(
      user => {
        if (this.isLoggedIn) {
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
        if (userDetails.user.active) this.router.navigate(['dashboard']);
        else this.router.navigate(['verification']);
      }
    );
  }
  GoogleAuthentication(): void {
    if (this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)) {
      this.dataService.currentStatus.subscribe(loggedIn => this.isLoggedIn = !loggedIn);
    }
  }
  FacebookAuthentication(): void {
    if (this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID)) {
      this.dataService.currentStatus.subscribe(loggedIn => this.isLoggedIn = !loggedIn);
    }
  }
}
