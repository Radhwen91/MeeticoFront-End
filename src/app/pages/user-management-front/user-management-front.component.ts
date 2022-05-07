import { Component, Inject, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Request } from 'src/app/models/request';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';
import * as pdfjsLib from 'pdfjs-dist';
import { createWorker } from 'tesseract.js';
import { RequestService } from 'src/app/services/request.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavbarPasswordDialog } from 'src/app/components/navbar/navbar.component';

@Component({
  selector: 'app-user-management-front',
  templateUrl: './user-management-front.component.html',
  styleUrls: ['./user-management-front.component.scss']
})

export class UserManagementFrontComponent {
  itemsPerPage: number = 2;
  currentPage: number = 1;
  user: User;
  address: string[] = [];
  disabled = false;
  path: string;
  waitingText: string;
  request: Partial<Request> = {};
  requests: Request[];
  constructor(private tokenService: TokenService, private userService: UserService, private requestService: RequestService, private modalService: NgbModal, private matDialog: MatDialog) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js';
  }
  ngOnInit() {
    this.user = this.tokenService.getUser();
    this.requestService.retrieveAllRequests(this.user.userId).subscribe(requests => this.requests = requests);
  }
  editProfile() {
    this.disabled = true;
  }
  async readFile(event) {
    if (event.target.files[0]) {
      if (event.target.files[0].type == "application/pdf") {
        this.waitingText = "Recognizing...";
        let formData = new FormData();
        formData.append('file', event.target.files.item(0));
        this.userService.uploadConvertablePDF(formData).subscribe(async files => await pdfjsLib.getDocument(files[0]).promise.then(async res => {
          let countPromises = [];
          for (let i = 1; i <= res._pdfInfo.numPages; i++) {
            res.getPage(i).then(async res => {
              const textContent = await res.getTextContent();
              countPromises.push(textContent.items.map((s) => s.str).join(''));
              const pageContents = await Promise.all(countPromises);
              let parsedText = pageContents.join('').slice();
              this.request.nic = +parsedText.slice(parsedText.indexOf("National Identity Card : ") + 25, parsedText.indexOf("First Name :") - 1);
              this.request.firstName = parsedText.slice(parsedText.indexOf("First Name : ") + 13, parsedText.indexOf("Last Name :") - 1);
              this.request.lastName = parsedText.slice(parsedText.indexOf("Last Name :") + 12, parsedText.indexOf("Gender :") - 1);
              this.request.gender = parsedText.slice(parsedText.indexOf("Gender :") + 9, parsedText.lastIndexOf("Phone Number :") - 1);
              this.request.phoneNumber = +parsedText.slice(parsedText.indexOf("Phone Number :") + 15, parsedText.lastIndexOf("Email Address :") - 1);
              this.request.email = parsedText.slice(parsedText.indexOf("Email Address :") + 16, parsedText.lastIndexOf(" "));
            });
            this.disabled = true;
            this.waitingText = "";
          }
        }));
      }
      else if (event.target.files[0].type.toString().startsWith("image/")) {
        this.waitingText = 'Recognizing...';
        const worker = createWorker();
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onloadend = (async event => {
          const { data: { text } } = await worker.recognize(event.target.result.toString());
          this.waitingText = text;
          this.disabled = true;
          this.waitingText = "";
          await worker.terminate();
        });
      }
    }
  }
  createRequest() {
    this.requestService.createRequest(this.request).subscribe(
      request => {
        this.requestService.assignSenderToRequest(request.requestId, this.user.userId).subscribe(
          user => {
            this.tokenService.saveUser(user);
            this.disabled = false;
            this.ngOnInit();
          }
        );
      }
    );
  }
  openRemoveModal(selectedRequest: Request) {
    let modalRef = this.modalService.open(NgbdModalConfirm);
    modalRef.result.then(
      clicked => {
        if (clicked) {
          this.deleteRequest(selectedRequest);
        }
      }
    );
  }
  deleteRequest(selectedRequest) {
    this.requestService.deleteRequest(selectedRequest.requestId).subscribe(selectedRequest => this.ngOnInit());
  }
  openUpdateDialog(selectedRequest: Request) {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      top: '200px',
      left: '650px',
    };
    dialogConfig.data = selectedRequest;
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
}

@Component({
  selector: 'ngbd-modal-confirm',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Profile deletion</h4>
    <button type="button" class="btn-close" aria-describedby="modal-title" (click)="modal.close()"></button>
  </div>
  <div class="modal-body">
    <p class="text-center"><strong>Are you sure you want to delete this invitation?</strong></p>
    <p class="text-center">All information associated will be permanently deleted.
    <span class="text-center text-danger">This operation can not be undone.</span>
    </p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-danger" (click)="modal.close(!this.clicked)">Ok</button>
    <button type="button" class="btn btn-outline-primary" (click)="modal.close()">Cancel</button>
  </div>
  `
})
export class NgbdModalConfirm {
  clicked = false;
  constructor(public modal: NgbActiveModal) { }
}

@Component({
  selector: 'app-navbar-password-dialog',
  template: `<h4 mat-dialog-title class="text-center">Change Password</h4>
  <br/>
  <mat-dialog-content [formGroup]="form">
  <mat-form-field>
      <input matInput placeholder="First Name" formControlName="firstName" [(ngModel)]="request.firstName" name="firstName">
    </mat-form-field>
    <br/>
    <mat-form-field>
      <input matInput placeholder="Last Name" formControlName="lastName" [(ngModel)]="request.lastName" name="lastName">
    </mat-form-field>
    <br/>
    <mat-form-field>
    <label class="form-control-label">Gender</label>
      <select   type="text" class="form-control form-control-alternative" name="gender" [(ngModel)]="request.gender">
        <option value="null" hidden>Undefined</option>
        <option value="MALE">Male</option>
        <option value="FEMALE">Female</option>
      </select>
    </mat-form-field>
    <br/>
    <mat-form-field>
      <input matInput placeholder="National Identity Card" formControlName="nic" [(ngModel)]="request.nic" name="nic">
    </mat-form-field>
    <br/>
    <mat-form-field>
      <input matInput placeholder="Email Address" formControlName="emailAddress" [(ngModel)]="request.email" name="emailAddress">
    </mat-form-field>
    <br/>
    <mat-form-field>
      <input matInput placeholder="Phone Number" formControlName="phoneNumber" [(ngModel)]="request.phoneNumber" name="phoneNumber">
    </mat-form-field>
    <br/>  
  </mat-dialog-content>
  <mat-dialog-actions>
  <button mat-button class="mat-raised-button mat-primary" (click)="dialogRef.close(this.form.value)">Save</button>
      <button mat-button class="mat-raised-button" style="margin-left: 25%;" (click)="dialogRef.close()">Close</button>
  </mat-dialog-actions>`
})

export class UpdateRequestDialog implements OnInit {
  form: FormGroup;
  request: Request;
  constructor(public dialogRef: MatDialogRef<UpdateRequestDialog>, private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) data) {
    this.request = data;
  }
  ngOnInit() {
    document.getElementById(this.dialogRef.id).style.cssText = `background: white`;
    this.form = this.formBuilder.group({
      firstName: this.request.firstName,
      lastName: this.request.lastName,
      gender: this.request.gender,
      nic: this.request.nic,
      emailAddress: this.request.email,
      phoneNumber: this.request.phoneNumber
    });
  }
}
