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

  constructor(
    private projectsService: ProjectsService
  ) {}

  ngOnInit() {
    this.projectsService.getProjects().subscribe(res => this.projects = res);
    this.projectsService.getTasks().subscribe(res => this.tasks = res);
  }

  cardClicked(project: Project) {
    this.projectsService.navigateTo('/projects/' + project.name);
  }
}
