import { TestBed } from '@angular/core/testing';

import { CvService } from './cv.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { CV } from '../../models/CV';

describe('CvService', () => {
  let service: CvService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        CvService,
        provideHttpClient(),        // Essential: Provides the actual HttpClient
        provideHttpClientTesting() // Replaces HttpClientTestingModule
      ]
    });

    service = TestBed.inject(CvService);
    httpMock = TestBed.inject(HttpTestingController)

  });

    afterEach(() => {
      // Verifica que no queden solicitudes pendientes
      httpMock.verify();
    });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a CV',()=>{
    const mockData : CV = { id: '1', url : 'Test_url' }; // 1. Define your fake data

    service.getCV().subscribe({
      next: (cv) => {
        expect(cv).toEqual(mockData); // 3. This runs AFTER you flush
        }
    });

    // 2. Espera que sea una request con esta url específica
    const req = httpMock.expectOne('https://62b5c3ad42c6473c4b39c3af.mockapi.io/api/cv/1');

    // 3. Verifica que sea una petición GET
    expect(req.request.method).toBe('GET');
  
    // 4. "Flush" provides the response and triggers the .subscribe() above
    req.flush(mockData);
  })
});
