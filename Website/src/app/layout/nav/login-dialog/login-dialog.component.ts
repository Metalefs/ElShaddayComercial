import {Component, Inject, NgZone} from '@angular/core';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface LoginDialogData {
  passos: string;
  operacao: string;
}

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {
  passos: string;
  operacao: string;
  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LoginDialogData, private ngZone: NgZone) {}

  onNoClick(): void {
    this.dialogRef.close();
    this.ngZone.run(() => {
      this.dialogRef.close();
    });    
  }

}
