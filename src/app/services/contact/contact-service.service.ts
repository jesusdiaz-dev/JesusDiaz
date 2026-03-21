import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { catchError, from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContactServiceService {

  // async send(data: Record<string, unknown>) {
  //   emailjs.init('HZBWjwdhDBzEJTX0O');
  //   try {
  //     let response = await emailjs.send("service_a03de48", "template_5az5z1q", data);
  //     return response;
  //   } catch (error) {
  //     return error;
  //   }
  // }

  private readonly USER_ID = 'HZBWjwdhDBzEJTX0O';
  private readonly SERVICE_ID = 'service_a03de48';
  private readonly TEMPLATE_ID = 'template_5az5z1q';

  constructor() {
    emailjs.init(this.USER_ID);
  }

  send(data: Record<string, string>): Observable<EmailJSResponseStatus | any> {
    // Convertimos la Promesa en Observable
    return from(emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, data)).pipe(
      catchError(error => {
        console.error('EmailJS Error:', error);
        return of(error); // Retornamos el error como un flujo observable
      })
    );
  }
}
