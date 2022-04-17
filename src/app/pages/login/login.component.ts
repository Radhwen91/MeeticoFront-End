import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/_services/token.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hidePassword = true;
  credentials: any = {
    username: null,
    password: null
  };
  constructor(private userService: UserService, private tokenService: TokenService, private router: Router) { }
  onSubmit() {
    this.userService.authenticateUser(this.credentials).subscribe(
      user => {
        this.tokenService.saveToken(user.accessToken);
        this.tokenService.saveUser(user.data);
        this.router.navigate(['dashboard']);
      }
    );
  }
}
