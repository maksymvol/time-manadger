import {Injectable} from '@angular/core';
import {ServerService} from './server.service';
import {Task} from './Task';
import {Project} from './Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private serverService: ServerService) {
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
}
