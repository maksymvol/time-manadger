import {Component, OnInit} from '@angular/core';
import {ProjectsService} from '../projects.service';
import {Project} from '../Project';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  projects: Project[] = [];

  constructor(
    private projectsService: ProjectsService
  ) {}

  ngOnInit() {
    this.projectsService.getProjects().subscribe(res => this.projects = res);
  }

}
