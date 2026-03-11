import { Component, OnInit, inject, } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactServiceService } from '../../services/contact/contact-service.service';
import { CommonModule, JsonPipe, NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { EmailJSResponseStatus } from '@emailjs/browser';
import { CustomModalComponent } from "../commons/custom-modal/custom-modal.component";


@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, ReactiveFormsModule, JsonPipe, TranslateModule, NgClass, CustomModalComponent]
})
export class ContactComponent {


  private service = inject(ContactServiceService);
  private fb = inject(FormBuilder);

  form: FormGroup = this.fb.group({
    from_name: '',
    to_name: '',
    from_email: '',
    subject: '',
    message: '',
  });

  sendWithoutErrors!: boolean;
  success_message: boolean = false;
  there_was_an_error!: boolean;

  async send() {

    if (this.form.invalid) {
      this.success_message = true;
      return;
    }

    let data = {
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      subject: this.form.value.subject,
      message: this.form.value.message,
    }

    try {
      const response = <EmailJSResponseStatus>await this.service.send(data);
      if (response.status === 200) {
        this.success_message = true;
        this.form.reset();
      }
      else {
        this.there_was_an_error = true;
        this.form.reset();
      }
    } catch (error) {
      this.there_was_an_error = true;
    }
  }


  closeModal() {
    this.success_message = false;
    this.there_was_an_error = false;
  }

  hasErrors(controlName: string, errorType: string) {
    return this.form.get(controlName)?.hasError(errorType) && this.form.get(controlName)?.touched
  }
}

