import {Injectable} from '@angular/core';
import {ServerService} from './server.service';
import {Task} from './Task';
import {Project} from './Project';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {Duration} from './Duration';

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

  private getCurrentProjectName() {
    return this.router.url.split('/')[2].split('_').join(' ');
  }

  deleteProject(project: Project) {
    return this.serverService.deleteProject(project.id);
  }

  saveProjectInfo(name: string, description: string, priority: number, project: Project) {
    const updatedProject = project;
    updatedProject.descriptions = description;
    updatedProject.name = name;
    updatedProject.priority = priority;

    return this.serverService.updateProject(updatedProject);
  }

  saveTask(task) {
    return this.serverService.saveTask(task);
  }

  getRouteUrl() {
    return this.router.events
      .pipe(
        filter(e => e instanceof NavigationEnd)
      );
    /*console.log(this.routeUrl);
    return (this.routeUrl.split('/')[1] === url);*/
  }

  addNewTask(projectId, taskId) {
    return this.serverService.addNewTask({
      id: taskId,
      name: 'new task',
      projectId: projectId,
      priority: 1
    });
  }

  getNewTaskId() {
    return this.serverService.getNewTaskId();
  }
}
