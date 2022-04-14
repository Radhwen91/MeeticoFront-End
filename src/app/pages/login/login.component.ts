import { Component } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { TokenService } from 'src/app/_services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private userService: UserService, private token: TokenService, private router: Router) { }
  signedUp = false;
  user: any = {
    username: null,
    password: null
  };
  onSubmit() {
    const connectedUser = {
      username: this.user.username,
      password: this.user.password
    };
    this.userService.authenticateUser(connectedUser).subscribe(
      data => {
        //this.token.saveToken(data.accessToken);
        //this.token.saveUser(data);
        this.signedUp=true;
      }
    );
    if(this.signedUp === true) {
      this.router.navigate(['dashboard']);
    }
  }
}
