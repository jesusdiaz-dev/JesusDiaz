import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/commons/header/header.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CustomTranslateService } from './services/custom-translate/custom-translate.service';
import * as AOS from 'aos';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  customTranslateSerice: CustomTranslateService = inject(CustomTranslateService);

  constructor(translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');

    // Suscribirse al Observable de cambio de idioma
    this.customTranslateSerice.getLangObservable().subscribe(newLang => {
      translate.use(newLang);
    });
  }
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true, // Necesario para que funcionen los modales, evita que se oculten las secciones al hacer scroll up.
      // mirror: true,
      // offset: 300
    });
  }

  title = 'JesusDiazWeb';
}
