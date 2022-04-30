import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { User } from 'src/app/_models/user';
import { DataService } from 'src/app/_services/data.service';
import { TokenService } from 'src/app/_services/token.service';
import { UserService } from 'src/app/_services/user.service';
import { ROUTES } from '../sidebar/sidebar.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  location: Location;
  titles: any[];
  user: User;
  socialUser: SocialUser;
  picture: string;
  constructor(location: Location, private tokenService: TokenService, private router: Router, private socialAuthService: SocialAuthService, private dataService: DataService, private userService: UserService, private matDialog: MatDialog) {
    this.location = location;
  }
  ngOnInit(): void {
    this.titles = ROUTES.filter(title => title);
    this.user = this.tokenService.getUser();
    if (this.user) {
      this.socialUser = this.tokenService.getSocialUser();
      if (this.socialUser.provider == "FACEBOOK")
        this.socialUser.photoUrl = this.socialUser.response.picture.data.url;
    }
    else this.userService.signInStatus(this.user.userId).subscribe();

  }
  getTitle(): string {
    var title = this.location.prepareExternalUrl(this.location.path());
    if (title.charAt(0) === '#') title = title.slice(1);
    if (title === '/calendar') return 'CALENDAR'
    for (var item = 0; item < this.titles.length; item++) {
      if (this.titles[item].path === title) {
        return this.titles[item].title;
      }
    }
    return 'Dashboard';
  }
  changePassword() {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      top: '200px',
      left: '650px',
    };
    let dialogRef = this.matDialog.open(NavbarPasswordDialog, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        this.user.password = data.newPassword;
        this.tokenService.saveUser(this.user);
        this.userService.updateProfile(this.user).subscribe();
      }
    );
  }
  signOut() {
    if (this.socialUser) {
      this.userService.signOutStatus(this.user.userId).subscribe();
      this.tokenService.signOut();
    }
    else {
      this.socialAuthService.signOut();
      this.dataService.currentStatus.subscribe(loggedIn => loggedIn = !loggedIn);
    }
    this.router.navigate(['login']);
  }
}

@Component({
  selector: 'app-navbar-password-dialog',
  template: `<h4 mat-dialog-title class="text-center">Change Password</h4>
  <br/>
  <mat-dialog-content [formGroup]="form">
      <mat-form-field>
          <input matInput placeholder="New Password" formControlName="newPassword" [(ngModel)]="newPassword" name="newPassword">
      </mat-form-field>
      <br/>
      <mat-form-field>
        <input matInput placeholder="Confirm Password" formControlName="confirmPassword" [(ngModel)]="confirmPassword" name="confirmPassword">
    </mat-form-field>
      <br/>  
  </mat-dialog-content>
  <mat-dialog-actions>
      <button class="mat-raised-button mat-primary" (click)="save()">Save</button>
      <button class="mat-raised-button" style="margin-left: 25%;" (click)="close()">Close</button>
  </mat-dialog-actions>`
})

export class NavbarPasswordDialog implements OnInit {
  form: FormGroup;
  newPassword: string;
  confirmPassword: string;
  constructor(private dialogRef: MatDialogRef<NavbarPasswordDialog>, private formBuilder: FormBuilder) { }
  ngOnInit() {
    document.getElementById(this.dialogRef.id).style.cssText = `background: white`;
    this.form = this.formBuilder.group({
      newPassword: this.newPassword,
      confirmPassword: this.confirmPassword
    });
  }
  save() {
    this.dialogRef.close(this.form.value);
  }
  close() {
    this.dialogRef.close();
  }
}
