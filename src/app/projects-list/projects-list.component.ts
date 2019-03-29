import {Component, OnInit} from '@angular/core';
import {ProjectsService} from '../projects.service';
import {Project} from '../Project';
import {Task} from '../Task';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  projects: Project[] = [];
  tasks: Task[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projectsService.getProjects().subscribe(res => this.projects = res);
    this.projectsService.getTasks().subscribe(res => this.tasks = res);
  }

  cardClicked(project: Project) {
    this.projectsService.changeCurrentProjectId(project.id);
    this.projectsService.navigateTo('/projects/' + project.name);
  }

  handleNewCardClicked() {
    let id = 0;
    if (this.projects.length !== 0) {
      id = this.projects.reduce((prev, curr) => {
        return (prev.id > curr.id) ? prev : curr;
      }).id + 1;
    }
    let project;
    this.projectsService.addNewProject(id).subscribe(res => {project = res}, (e) => {},
      () => this.projectsService.getProjects().subscribe(res => this.projects = res, (e) => {},
        () => {this.goToProject(project, this.projects); }));
  }

  deleteProject(project: Project) {
    this.projectsService.deleteProject(project).subscribe(res => {}, (e) => {},
      () => {
        this.projectsService.getProjects().subscribe(res => this.projects = res);
        this.projectsService.getTasks().subscribe(res => this.tasks = res);
      });
  }

  private goToProject(project: Project, projects: Project[]) {
    const proj = ProjectsService.getProjectByName(project, projects);
    this.cardClicked(proj);
  }
}
