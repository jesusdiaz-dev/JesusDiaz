import { TestBed } from '@angular/core/testing';

import { ContactServiceService } from './contact-service.service';

describe('ContactServiceService',()=>{

  let contactService : ContactServiceService;

  beforeEach(()=>{
    TestBed.configureTestingModule({});
    contactService = TestBed.inject(ContactServiceService);
  })

  it('should be created', ()=>{
    expect(contactService).toBeTruthy();
  })

  
})