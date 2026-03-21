import { Component, inject, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../../../../models/dialogs/dialog';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss'
})
export class ConfirmDialogComponent {

  public data: DialogData = inject(MAT_DIALOG_DATA)
  private dialogRef: MatDialogRef<ConfirmDialogComponent> = inject(MatDialogRef)

  // Dos maneras, mediante inyeccion de dependencias en el constructor o metodo inject()
  // constructor(
  // private dialogRef: MatDialogRef<ConfirmDialogComponent>,
  // @Inject(MAT_DIALOG_DATA) public data: DialogData
  // ) { }

  close(): void {
    this.dialogRef.close(false); // Retorna false si se cierra con la X o el botón No
  }

}
