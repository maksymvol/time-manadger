import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Project} from '../Project';
import {Task} from '../Task';
import {ProjectsService} from '../projects.service';
import {InputComponent} from '../input/input.component';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  @ViewChildren(InputComponent) inputComponents: QueryList<InputComponent>;
  project: Project = {name: '', descriptions: '', id: -1};
  tasks: Task[] = [];

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit() {
    this.projectsService.getCurrentProject().subscribe(res => this.project = res);
    this.projectsService.getTasksInCurrentProject().subscribe(res => this.tasks = res);
  }

  saveProjectInfo() {
    this.projectsService.saveProjectInfo(this.inputComponents.first.value, this.inputComponents.last.value, this.project)
      .subscribe(res => this.project = res);
  }
}