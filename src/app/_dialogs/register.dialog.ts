import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'dialog-overview-example-dialog',
  template: `<div mat-dialog-content class="text">
                <h1 mat-dialog-title>Oops!</h1>
                <p>Something went wrong. <br>Please try again later.</p>
              </div>
              <div mat-dialog-actions align="center">
                <button mat-button (click)="closeDialog()">OK</button>
              </div>`
})
export class RegisterDialog {
  constructor(private ref: MatDialogRef<RegisterDialog>) { }
  closeDialog() {
    this.ref.close();
  }
}