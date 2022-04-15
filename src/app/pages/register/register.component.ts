import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/_services/token.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: any = {
    firstName: null,
    lastName: null,
    gender: null,
    email: null,
    phoneNumber: null,
    username: null,
    password: null
  };
  constructor(private userService: UserService, private router: Router) { }
  onSubmit() {
    this.userService.registerEntrepreneur(this.user).subscribe(
      data => {
        this.router.navigate(['login']);
      }
    );
  }
}
