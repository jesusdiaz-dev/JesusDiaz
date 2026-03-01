import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { AboutComponent } from "../about/about.component";
import { SomeTechnologiesComponent } from "../some-technologies/some-technologies.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";
import { WorkExperienceComponent } from "../work-experience/work-experience.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeroComponent, AboutComponent, SomeTechnologiesComponent, WorkExperienceComponent, ProjectsComponent, ContactComponent]
})
export class HomeComponent {

}
