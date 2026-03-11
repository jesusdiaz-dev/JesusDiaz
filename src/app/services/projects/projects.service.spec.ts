import { TestBed } from '@angular/core/testing';

import { ProjectsService } from './projects.service';
import { ProjectDTO } from '../../models/projects/projectDTO';

describe('ProjectsService', () => {
  let service: ProjectsService;

  const mockProjects: ProjectDTO[] = [
    { id: '999', name: { en: 'Mock Project', es: 'Proyecto Mock' }, img: '', technologies: [], description: { en: [], es: [] }, links: {} }
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsService);

    // FORCE the service to use our mock data instead of the real hardcoded array
    // @ts-ignore (to access private/protected if needed) or simply:
    (service as any).projects = mockProjects; //~ TODO: ver que es esto
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all projects', () => {
    const projects = service.getAll();

    expect(projects.length).toBeGreaterThan(0);
    expect(projects[0].id).toEqual('999');
  })

  it('should return a project when a valid ID is provided', () => {
    const project = service.getById('999');

    expect(project).toBeTruthy();
    expect(project?.id).toBe('999');
    expect(project?.name.en).toBe('Mock Project');
  })

  it('should return null if an invalid ID is provided', () => {
    const project = service.getById('500');

    expect(project).toBeNull();
  });

});
