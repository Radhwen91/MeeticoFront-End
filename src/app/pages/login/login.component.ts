import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { User } from 'src/app/_models/user';
import { TokenService } from 'src/app/_services/token.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  hidePassword = true;
  credentials: Partial<User> = {
    username: null,
    password: null
  };
  socialUser: SocialUser;
  isLoggedin?: boolean;
  constructor(private userService: UserService, private tokenService: TokenService, private router: Router, private socialAuthService: SocialAuthService) { }
  ngOnInit(): void {
    this.socialAuthService.authState.subscribe(
      user => {
        console.log(user)
        this.socialUser = user;
        this.isLoggedin = user != null;
        this.tokenService.saveSocialUser(this.socialUser);
        if (this.socialUser.provider == "GOOGLE")
          this.tokenService.saveToken(this.socialUser.response.id_token);
        else
          this.tokenService.saveToken(this.socialUser.authToken);
        this.router.navigate(['dashboard']);
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
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  FacebookAuthentication(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
}
