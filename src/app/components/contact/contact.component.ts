import { Component, OnInit, inject, } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactServiceService } from '../../services/contact/contact-service.service';
import { CommonModule, JsonPipe, NgClass } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { EmailJSResponseStatus } from '@emailjs/browser';
import { CustomModalComponent } from "../commons/custom-modal/custom-modal.component";
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../commons/dialogs/confirm-dialog/confirm-dialog.component';
import { DialogService } from '../../services/dialog/dialog.service';


@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, ReactiveFormsModule, JsonPipe, TranslateModule, NgClass, CustomModalComponent]
})
export class ContactComponent {


  private service = inject(ContactServiceService);
  private dialogService = inject(DialogService);
  private translate = inject(TranslateService);
  private fb = inject(FormBuilder);

  form: FormGroup = this.fb.group({
    from_name: '',
    to_name: '',
    from_email: '',
    subject: '',
    message: '',
  });

  async send() {

    if (this.form.invalid) {
      return;
    }

    let data = {
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      subject: this.form.value.subject,
      message: this.form.value.message,
    }
    this.dialogService.showNotification(
      this.translate.instant('Esoooo'),
      this.translate.instant('home.contact.send_to_modal.success'),
      'success');
    // this.service.send(data).subscribe({
    //   next: () => {
    //     this.dialogService.showNotification(this.translate.instant('home.contact.send_to_modal.success'), 'success');
    //     this.form.reset();
    //   },
    //   error: () => {
    //     this.dialogService.showNotification(this.translate.instant('home.contact.send_to_modal.error'), 'error');
    //     this.form.reset();
    //   }
    // });

  }

  hasErrors(controlName: string, errorType: string) {
    return this.form.get(controlName)?.hasError(errorType) && this.form.get(controlName)?.touched
  }
}

