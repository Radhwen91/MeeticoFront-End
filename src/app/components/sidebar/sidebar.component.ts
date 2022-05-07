import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SocialUser, SocialAuthService } from 'angularx-social-login';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-chart-bar-32 text-info', class: '' },
//  { path: '/icons', title: 'Icons',  icon:'ni-planet text-light', class: '' },
//  { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-light', class: '' },
//  { path: '/user-profile', title: 'User profile',  icon:'ni-circle-08 text-light', class: '' },
//  { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-light', class: '' },
//  { path: '/login', title: 'Login',  icon:'ni-key-25 text-light', class: '' },
//  { path: '/register', title: 'Register',  icon:'ni-circle-08 text-light', class: '' },
    { path: '/user-management', title: 'User Management', icon: 'ni-single-02 text-yellow', class: '' },
    { path: '/event-management', title: 'Event Management', icon: 'ni-tie-bow text-pink', class: '' },
    { path: '/feedback-management', title: 'Feedback Management', icon: 'ni-laptop text-cyan', class: '' },
    { path: '/publication-management', title: 'Publication Management', icon: 'ni-notification-70 text-blue', class: '' },
    { path: '/request-management', title: 'Request Management', icon: 'ni-badge text-black', class: '' },
    { path: '/reclamation-management', title: 'Reclamation Management', icon: 'ni-paper-diploma text-orange', class: '' },
    { path: '/trip-management', title: 'Trip Management', icon: 'ni-square-pin text-green', class: '' },
    { path: '/alert-management', title: 'Alert Management',  icon:'ni-notification-70 text-blue', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public location: Location;
  titles: any[];
  public menuItems: any[];
  public isCollapsed = true;
  user: User;
  socialUser: SocialUser;
  constructor(location: Location, private router: Router, private tokenService: TokenService, private socialAuthService: SocialAuthService, private dataService: DataService, private userService: UserService, private matDialog: MatDialog) {
    this.location = location;
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
    this.user = this.tokenService.getUser();
    if (this.user) {
      this.socialUser = this.tokenService.getSocialUser();
      if (this.socialUser.provider == "FACEBOOK") this.socialUser.photoUrl = this.socialUser.response.picture.data.url;
    }
    else this.userService.signInStatus(this.user.userId).subscribe();
  }
  getTitle(): boolean {
    var title = this.location.prepareExternalUrl(this.location.path());
    if (title === '/verification') return true;
  }
  changePassword() {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      top: '200px',
      left: '650px',
    };
    let dialogRef = this.matDialog.open(SidebarPasswordDialog, dialogConfig);
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
  selector: 'app-sidebar-password-dialog',
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
      <button class="mat-raised-button mat-primary" (click)="dialogRef.close(this.form.value)">Save</button>
      <button class="mat-raised-button" style="margin-left: 25%;" (click)="dialogRef.close()">Close</button>
  </mat-dialog-actions>`
})

export class SidebarPasswordDialog implements OnInit {
  form: FormGroup;
  newPassword: string;
  confirmPassword: string;
  constructor(public dialogRef: MatDialogRef<SidebarPasswordDialog>, private formBuilder: FormBuilder) { }
  ngOnInit() {
    document.getElementById(this.dialogRef.id).style.cssText = `background: white`;
    this.form = this.formBuilder.group({
      newPassword: this.newPassword,
      confirmPassword: this.confirmPassword
    });
  }
}
