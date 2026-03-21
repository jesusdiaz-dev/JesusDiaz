import { TestBed } from '@angular/core/testing';

import { CustomTranslateService } from './custom-translate.service';
import { skip, take } from 'rxjs';

fdescribe('CustomTranslateService', () => {
  let service: CustomTranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomTranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('should start with language es',()=>{
    service.getLangObservable().pipe(take(1)).subscribe(lang => {
      expect(lang).toBe('es');
    });
  })

  it('should change language',()=>{
    // starts with 'es'
    service.getLangObservable().pipe(take(1)).subscribe(lang => {
      expect(lang).toBe('es');
    });

    service.getLangObservable().pipe(skip(1),take(1)).subscribe(lang => {
      expect(lang).toBe('en');
    });

    service.changeLang('en');
  })

});
