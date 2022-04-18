import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/_models/user";
import { UserService } from "src/app/_services/user.service";

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
  constructor(private userService: UserService, private router: Router) { }
  ngSubmit(): void {
    this.userService.registerEntrepreneur(this.user).subscribe(
      user => {
        this.router.navigate(['login']);
      }
    );
  }
}
