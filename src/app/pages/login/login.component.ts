import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private userService: UserService, private tokenService: TokenService, private router: Router) { }
  ngSubmit() {
    this.userService.authenticateUser(this.credentials).subscribe(
      userDetails => {
        this.tokenService.saveToken(userDetails.accessToken);
        this.tokenService.saveUser(userDetails.user);
        this.router.navigate(['dashboard']);
      }
    );
  }
}
