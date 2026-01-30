import { Component, HostListener, OnInit, ViewChild, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { NgClass, NgStyle } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from '../../hero/hero.component';
import { AboutComponent } from "../../about/about.component";
import { ProjectsComponent } from "../../projects/projects.component";
import { SomeTechnologiesComponent } from "../../some-technologies/some-technologies.component";
import { ContactComponent } from "../../contact/contact.component";
import { FooterComponent } from "../footer/footer.component";
import { CustomTranslateService } from '../../../services/custom-translate.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    NgStyle,
    SomeTechnologiesComponent,
    ContactComponent,
    FooterComponent,
    NgClass,
    MatMenuModule,
    TranslateModule
  ]
})


export class HeaderComponent implements OnInit{

  menuOpened: boolean = false;
  screenWidth: number;
  navbarfixed: boolean = false;
  
  customTranslateService: CustomTranslateService = inject(CustomTranslateService);
  lang !:string;

  constructor() {
    // set screenWidth on page load
    this.screenWidth = window.innerWidth;
    // Agregamos un listener de redimensionamiento
    window.addEventListener('resize', this.handleResize);
    // Llamamos a handleResize para establecer el estado inicial
    this.handleResize();
  }

  ngOnInit(): void {
    this.customTranslateService.getLangObservable().subscribe(
      newLang=>this.lang=newLang
    );
  }

  // Change the language for whole application
  changeLang( newLang :string){
    this.customTranslateService.changeLang(newLang);
  }

  // method to determined the change navbar styles (navbar fixed animation and height change)
  @HostListener('window:scroll') onScroll() {
    if (window.scrollY > 100) {
      this.navbarfixed = true;
    }
    else {
      this.navbarfixed = false;
    }
  }

  // Método para manejar el redimensionamiento y mostrar menu lateral o navbar desktop
  private handleResize = () => {
    // set screenWidth on screen size change
    this.screenWidth = window.innerWidth;

    // Check if screenWidth is greater than 768 and close the menu if it's open
    if (this.screenWidth > 768) {
      this.menuOpened = false;
    }
  };

  //Close the hamburguer menu
  closeMenu() {
    this.menuOpened = false;
  }




  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  openLanguageMenu() {
    this.trigger.openMenu();
  }


}
