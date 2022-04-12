import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterDialog } from '../_dialogs/register.dialog';
import { AuthService } from '../_services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: any = {
    //firstName: null,
    //lastName: null,
    email: null,
    username: null,
    //domainName: null,
    password: null,
    confirmPassword: null
  };
  hidePassword = true;
  hideConfirmPassword = true;
  signUpFailed = false;
  signedUp = false;
  isUsernameFirstCharacterDot = false;
  isUsernameLastCharacterDot = false;
  hasUsernameConsecutiveDots = false;
  errorMessage: any;
  inputs = new Map([
    //["firstName", false],
    //["lastName", false],
    ["email", false],
    ["username", false],
    ["password", false],
    ["confirmPassword", false]
  ]);
  key = this.inputs.keys();
  constructor(private dialog: MatDialog, private auth: AuthService) { }
  ngOnInit() {
  };
  onFocus(key: any) {
    if (key) {
      this.inputs.set(key, true);
    };
  };
  onBlur(key: any) {
    if (key) {
      this.inputs.set(key, false);
    };
  };
  onSubmit() {
    const data = {
      email: this.form.email,
      password: this.form.password,
      username: this.form.username
    };

    this.auth.register(data).subscribe(
      data => {
        console.log(data);
        this.signedUp = true;
        this.signUpFailed = false;
      },
      error => {
        this.errorMessage = error.message;
        this.signUpFailed = true;
        this.dialog.open(RegisterDialog, {width: '250px'});
      });
  };
  getError() {
    if (this.form.username[0].includes(".")) {
      this.isUsernameFirstCharacterDot = true;
    };
    if (this.form.username[this.form.username.length - 1].includes(".")) {
      this.isUsernameLastCharacterDot = true;
    };
    for (let i = 0; i < this.form.username.length - 1; i++) {
      if (this.form.username[i].includes(".") && (this.form.username[i + 1].includes("."))) {
        this.hasUsernameConsecutiveDots = true;
      };
    };
    return;
  }
  onVerify() {
    window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
    /*this.activated.queryParams.subscribe((params: Params) => {
      console.log(params);
    });*/
  };
};