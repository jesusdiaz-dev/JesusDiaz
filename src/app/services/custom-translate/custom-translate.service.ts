import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomTranslateService {

 
  private langSubject: BehaviorSubject<string> = new BehaviorSubject<string>('es');

  constructor() { }

  changeLang(newLang: string): void {
    this.langSubject.next(newLang);
  }

  getLangObservable(): Observable<string> {
    return this.langSubject.asObservable();
  }
}
