import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectDTO } from '../../models/projects/projectDTO';
import { ProjectsService } from '../../services/projects/projects.service';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { CustomTranslateService } from '../../services/custom-translate/custom-translate.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [TranslateModule, MatIconModule, CommonModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent implements OnInit {

  router: ActivatedRoute = inject(ActivatedRoute);
  projectId !: string;
  project !: ProjectDTO | null;
  projectService = inject(ProjectsService);
  customTranslateService = inject(CustomTranslateService);
  lang !: string;

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.projectId = params['id'];
      this.project = this.projectService.getById(params['id']);

      this.customTranslateService.getLangObservable().subscribe(newLang => {
        this.lang = newLang;
      })
    })
  }

  @ViewChild('scrollElement') scrollElement!: ElementRef;

  ngAfterViewInit(): void {
    this.scrollToTop();
  }

  scrollToTop() {
    if (this.scrollElement && this.scrollElement.nativeElement) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }

}
