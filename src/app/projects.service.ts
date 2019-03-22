import {Injectable} from '@angular/core';
import {ServerService} from './server.service';
import {Task} from './Task';
import {Project} from './Project';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private serverService: ServerService, private router: Router) {
  }

  getProjects() {
    return this.serverService.getProjects();
  }

  getTasks() {
    return this.serverService.getTasks();
  }

  getTasksInProject(project: Project, tasks: Task[]): Task[] {
    return tasks.filter(task => task.projectId === project.id);
  }

  navigateTo(url: string) {
    const resultUrl = url.split(' ').join('_');
    this.router.navigateByUrl(resultUrl);
  }

  getCurrentProjectName() {
    return this.router.url.split('/')[2].split('_').join(' ');
  }

  getCurrentProject(name: string) {
    return this.serverService.getProjectByName(name);
  }

  getTasksInCurrentProject(name: string) {
    return this.serverService.getTasksInCurrentProject(name);
  }
}
