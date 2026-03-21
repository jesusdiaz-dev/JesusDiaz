import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/commons/dialogs/confirm-dialog/confirm-dialog.component';
import { Observable } from 'rxjs';
import { NotificationDialog } from '../../components/commons/dialogs/notification-dialog/notification-dialog';
import { ConfirmDialogData } from '../../models/dialogs/dialog';

@Injectable({
    providedIn: 'root'
})
export class DialogService {
    private dialog = inject(MatDialog);

    // A generic method for confirmations
    confirm(message: string, title: string = 'Confirm Action'): Observable<boolean> {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: '350px',
            data: { title, message }
        });

        return dialogRef.afterClosed();
    }

    // A specific method for success/errors
    showNotification(title: string, message: string, type: 'success' | 'error'): void {
        // You could use the same component or a different one
        this.dialog.open<NotificationDialog, ConfirmDialogData>(NotificationDialog, {
            width: '350px',
            data: { title, message, type }
        });
    }
}