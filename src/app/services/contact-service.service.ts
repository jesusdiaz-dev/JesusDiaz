import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})

export class ContactServiceService {

  async send(data: Record<string, unknown>) {
    emailjs.init('HZBWjwdhDBzEJTX0O');
    try {
      let response = await emailjs.send("service_a03de48", "template_5az5z1q", data);
      return response;
    } catch (error) {
      return error;
    }
  }

}
