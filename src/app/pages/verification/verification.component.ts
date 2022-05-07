import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})

export class VerificationComponent implements OnInit {
  user: User;
  constructor(private tokenService: TokenService, private userService: UserService, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.user = this.tokenService.getUser();
    let modalRef = this.modalService.open(NgbdModalVerification);
    modalRef.result.then(verificationCode => {
      if (verificationCode) {
        this.userService.approvePendingEmployee(verificationCode).subscribe(employee => {
          this.user.active = employee.active;
          this.tokenService.saveUser(this.user);

          this.router.navigate(['dashboard']);
        });
      }
    })
  }
  signOut() {
    this.userService.signOutStatus(this.user.userId).subscribe();
    this.tokenService.signOut();
    this.router.navigate(['login']);
  }
}

@Component({
  selector: 'ngbd-modal-confirm',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Account activation</h4>
    <button type="button" class="btn-close" aria-describedby="modal-title" (click)="modal.close()"></button>
  </div>
  <div class="modal-body">
    <form>
      <div class="mb-3">
        <h5 class="text-center" for="verificationCode">For security reasons, please fill in your verification code below.</h5>
        <br>
        <div class="input-group">
          <input class="form-control" style="max-width: 50%; margin-left: auto; margin-right: auto" #code="ngModel" [(ngModel)]="verificationCode" name="verificationCode" placeholder="Enter your verification code" required minlength="6" maxlength="6">
          <mat-hint *ngIf="verificationCode" align="center">{{code.value.length}}/6</mat-hint>
          <!-- <mat-error *ngIf="code.errors?.['required']">The verification code is required.</mat-error>
          <mat-error *ngIf="code.errors?.['minlength']">The verification code must be at least 6 characters long.</mat-error>  -->
        </div>
      </div>
    </form>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-success" (click)="modal.close(this.verificationCode)">Activate</button>
    <button type="button" class="btn btn-outline-secondary" (click)="modal.close()">Cancel</button>
  </div>
  `
})
export class NgbdModalVerification {
  form: FormGroup;
  verificationCode: number;
  constructor(public modal: NgbActiveModal) { }
}
