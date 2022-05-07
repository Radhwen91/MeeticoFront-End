import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { GoogleLoginProvider, FacebookLoginProvider, SocialAuthService } from "angularx-social-login";
import { User } from "src/app/models/user";
import { DataService } from "src/app/services/data.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  user: Partial<User> = {
    email: null,
    firstName: null,
    gender: null,
    lastName: null,
    password: null,
    phoneNumber: null,
    username: null
  };
  isLoggedin: boolean;
  constructor(private userService: UserService, private router: Router) { }
  ngSubmit(): void {
    this.userService.registerEntrepreneur(this.user).subscribe(
      data => {
        this.router.navigate(['login']);
      }
    );
  }
  resolved(captchaResponse: string): void {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}
