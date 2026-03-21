import { Injectable, Type } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomTranslateService {

  
  private langSubject: BehaviorSubject<allowedLang> = new BehaviorSubject<allowedLang>('es');

  constructor() { }

  changeLang(newLang: allowedLang): void {
    this.langSubject.next(newLang);
  }

  getLangObservable(): Observable<allowedLang> {
    return this.langSubject.asObservable();
  }
}

export type allowedLang = 'es' | 'en';

