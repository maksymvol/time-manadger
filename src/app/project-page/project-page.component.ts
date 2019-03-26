import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Project} from '../Project';
import {Task} from '../Task';
import {ProjectsService} from '../projects.service';
import {InputComponent} from '../input/input.component';
import {TaskCardComponent} from '../task-card/task-card.component';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  @ViewChildren(InputComponent) inputComponents: QueryList<InputComponent>;
  @ViewChild(TaskCardComponent) TaskInfoCard;
  project: Project = {name: '', descriptions: '', id: -1, priority: 1};
  tasks: Task[] = [];
  priority = '1';
  currentTask = {name: '', priority: 0, id: -1, projectId: -1};

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit() {
    this.projectsService.getCurrentProject().subscribe(res => {
      this.project = res;
      this.priority = res.priority + '';
    });
    this.projectsService.getTasksInCurrentProject().subscribe(res => this.tasks = res);
  }

  saveProjectInfo() {
    this.projectsService.saveProjectInfo(this.inputComponents.first.value, this.inputComponents.last.value, +this.priority, this.project)
      .subscribe(res => this.project = res);
  }

  taskClicked(task: Task) {
    this.currentTask = task;
  }

  saveTaskChanges() {
    const task = {
      name: this.TaskInfoCard.getName(),
      priority: this.TaskInfoCard.getPriority(),
      id: this.currentTask.id,
      projectId: this.currentTask.projectId
    };
    this.projectsService.saveTask(task).subscribe(res => this.currentTask = res);
  }
}
