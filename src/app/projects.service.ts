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
    this.router.navigateByUrl(url);
  }
}
