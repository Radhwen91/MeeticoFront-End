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
  constructor(private userService: UserService, private token: TokenService, private router: Router) { }
  onSubmit() {
    this.userService.authenticateUser(this.credentials).subscribe(
      data => {
        this.token.saveToken(data.accessToken);
        this.token.saveUser(data);
        this.router.navigate(['dashboard']);
      }
    );
  }
}
