import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private userService: UserService, private token: TokenService) { }
  public user: any = {
    username: null,
    password: null,
  };
  public signedUp = false;
  public signUpFailed = false;
  public errorMessage: string;
  onSubmit() {
    const connectedUser = {
      username: this.user.username,
      password: this.user.password
    };
    this.userService.authenticateUser(connectedUser).subscribe(
      data => {
        this.token.saveToken(data.accessToken);
        this.token.saveUser(data);
      }
    );
  }
}
