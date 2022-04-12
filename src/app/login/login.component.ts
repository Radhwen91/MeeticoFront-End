import { Component, OnInit } from '@angular/core';
import { TokenService } from '../_services/token.service';
import { AuthService } from '../_services/auth.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  hidePassword = true;
  isLoggedIn = false;
  isLoginFailed = false;
  roles?: string[];
  errorMessage?: string;
  constructor(private token: TokenService, private auth: AuthService,
    //  private dialogRef: MatDialogRef<LoginComponent>
     ) { }

  // closeDialog() {
  //   this.dialogRef.close();
  // }
  ngOnInit() {
    /*if (this.token.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.token.getUser().roles;
    }*/
  }
  onSubmit() {
    this.auth.login(this.form).subscribe(
      data => {
        this.isLoginFailed = false;
        this.token.saveToken(data.accessToken);
        this.token.saveUser(data);
        window.location.reload();
      },
      err => {
        this.isLoginFailed = true;
        this.errorMessage = err.error.message;
      }
    );
  };
};