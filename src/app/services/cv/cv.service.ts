import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { CV } from '../../models/CV';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  BASE_URL_CV = 'https://62b5c3ad42c6473c4b39c3af.mockapi.io/api/cv/1';
  _httpClient: HttpClient = inject(HttpClient);

  getCV(): Observable<CV> {
    return this._httpClient.get<CV>(this.BASE_URL_CV);
  }
}


  