import { Injectable } from '@angular/core';
import { ProjectDTO } from '../../models/projects/projectDTO';
import { PROJECTS_DATA } from './projects.data';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: ProjectDTO[] = PROJECTS_DATA;

  constructor() { }

  getAll() {
    return this.projects;
  }

  getById(id: string) {
    const project = this.projects.find(project => project.id === id);
    if (project) {
      return project
    }
    else {
      return null;
    }
  }

}
