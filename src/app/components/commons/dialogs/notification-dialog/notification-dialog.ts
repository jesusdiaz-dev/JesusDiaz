import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmDialogData, DialogData } from '../../../../models/dialogs/dialog';

@Component({
  selector: 'app-notification-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './notification-dialog.html',
  styleUrl: './notification-dialog.scss',
})
export class NotificationDialog {


  constructor(
    public dialogRef: MatDialogRef<NotificationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  close(): void {
    this.dialogRef.close();
  }
}
