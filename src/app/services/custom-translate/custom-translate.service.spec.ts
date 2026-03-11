import { TestBed } from '@angular/core/testing';

import { CustomTranslateService } from './custom-translate.service';

describe('TranslateService', () => {
  let service: CustomTranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomTranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
