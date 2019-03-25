import {Injectable} from '@angular/core';
import {ServerService} from './server.service';
import {Task} from './Task';
import {Project} from './Project';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  currentProjectId: number;

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

  changeCurrentProject(id) {
    this.currentProjectId = id;
  }

  navigateTo(url: string) {
    const resultUrl = url.split(' ').join('_');
    this.router.navigateByUrl(resultUrl);
  }

  getCurrentProject() {
    return this.serverService.getProjectById(this.currentProjectId);
  }

  getTasksInCurrentProject() {
    return this.serverService.getTasksInCurrentProject(this.currentProjectId);
  }

  addNewProject(id) {
    this.router.navigateByUrl('/projects/New_project');
    return this.serverService.addNewProject('New project', id);
  }

  getCurrentProjectId() {

  }

  private getCurrentProjectName() {
    return this.router.url.split('/')[2].split('_').join(' ');
  }

  deleteProject(project: Project) {
    return this.serverService.deleteProject(project.id);
  }
}
