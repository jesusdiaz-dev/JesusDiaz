import { AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { PrimaryButtonComponent } from "../commons/buttons/primary-button/primary-button.component";
import { TranslateModule } from '@ngx-translate/core';
import { CvService } from '../../services/cv/cv.service';

@Component({
    selector: 'app-hero',
    standalone: true,
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss',
    imports: [PrimaryButtonComponent , TranslateModule]
})
export class HeroComponent   {

    _CvService = inject(CvService);
    cvUrl !: string;
    cvLoadFailed : boolean = false;
    
    ngOnInit(): void {
        this._CvService.getCV().subscribe({
            next: (cv) => {
                this.cvUrl = "https://drive.google.com/uc?export=download&id="+cv.url;
            },
            error: (error) => {
                this.cvLoadFailed = true;
            }
        })
    }

}
