import { Component, OnInit, inject } from '@angular/core';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ProjectDTO } from '../../models/projects/projectDTO';
import { PrimaryButtonComponent } from "../commons/buttons/primary-button/primary-button.component";
import { Router } from '@angular/router';
import { ProjectsService } from '../../services/projects/projects.service';
import { TranslateModule } from '@ngx-translate/core';
import { CustomTranslateService } from '../../services/custom-translate/custom-translate.service';

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss', './additional.scss'],
    imports: [CarouselModule, TagModule, PrimaryButtonComponent, TranslateModule]
})
export class ProjectsComponent implements OnInit {
    router: Router = inject(Router);
    projectService = inject(ProjectsService);
    projects!: ProjectDTO[];

    customTranslateService: CustomTranslateService = inject(CustomTranslateService);
    lang!: string;
    ngOnInit(): void {
        this.projects = this.projectService.getAll();
        this.customTranslateService.getLangObservable().subscribe(newLang => {
            this.lang = newLang;
        }
        )
    }


    responsiveOptions: CarouselResponsiveOptions[] = [

        {
            breakpoint: '10000px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '1280px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '769px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '481px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    showOverlayIndex: number | null = null;

    showOverlay(index: number) {
        this.showOverlayIndex = index;
    }

    hideOverlay() {
        this.showOverlayIndex = null;
    }

    navigateToDetail(id: string) {
        this.router.navigate(['/projects', id]);
    }
}
