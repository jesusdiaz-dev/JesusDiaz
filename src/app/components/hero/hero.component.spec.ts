import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComponent } from './hero.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { CvService } from '../../services/cv/cv.service';

class MockCvService {
  getCV() {
    return of({ url: '123456' });
  }
}


describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;
  let mockCvService: MockCvService;

  beforeEach(async () => {
    mockCvService = new MockCvService;

    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        HeroComponent,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        })
      ],
      providers: [
        { provide: CvService, useValue: mockCvService },
      ]
    })
      .compileComponents();


    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the hero title', () => {
    const title = fixture.nativeElement.querySelector('h1');
    // I test the keys of the translation file.
    expect(title.textContent).toContain('home.hero.greeting.hi  home.hero.greeting.my_name  home.hero.greeting.andhome.hero.greeting.fullstack');
  });

  it('should build the correct path for get the CV',()=>{
    // Act (Disparar el ngOnInit)
    fixture.detectChanges();

    const expectedUrl = "https://drive.google.com/uc?export=download&id=123456";
    expect(component.cvUrl).toBe(expectedUrl);
  })

  


});
