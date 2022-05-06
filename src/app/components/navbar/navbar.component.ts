import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { SocialUser, SocialAuthService } from 'angularx-social-login';
import { title } from 'process';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  user: User;
  socialUser: SocialUser;
  picture: string;
  constructor(location: Location,  private element: ElementRef, private router: Router,  private tokenService: TokenService, private socialAuthService: SocialAuthService, private dataService: DataService, private userService: UserService, private matDialog: MatDialog) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.user = this.tokenService.getUser();
    if (this.user) {
      this.socialUser = this.tokenService.getSocialUser();
      if (this.socialUser.provider == "FACEBOOK")
        this.socialUser.photoUrl = this.socialUser.response.picture.data.url;
    }
    else this.userService.signInStatus(this.user.userId).subscribe();
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }
    if (title === '/verification') return 'Verification';
    if (title === '/calendar') return 'Calendar';
    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
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
        if (data) {
          this.user.password = data.newPassword;
          this.tokenService.saveUser(this.user);
          this.userService.updateProfile(this.user).subscribe();
        }
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
  <button mat-button class="mat-raised-button mat-primary" (click)="dialogRef.close(this.form.value)">Save</button>
      <button mat-button class="mat-raised-button" style="margin-left: 25%;" (click)="dialogRef.close()">Close</button>
  </mat-dialog-actions>`
})

export class NavbarPasswordDialog implements OnInit {
  form: FormGroup;
  newPassword: string;
  confirmPassword: string;
  constructor(public dialogRef: MatDialogRef<NavbarPasswordDialog>, private formBuilder: FormBuilder) { }
  ngOnInit() {
    document.getElementById(this.dialogRef.id).style.cssText = `background: white`;
    this.form = this.formBuilder.group({
      newPassword: this.newPassword,
      confirmPassword: this.confirmPassword
    });
  }
}
