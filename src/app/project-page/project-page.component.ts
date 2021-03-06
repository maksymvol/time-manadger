import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Project} from '../Project';
import {Task} from '../Task';
import {ProjectsService} from '../projects.service';
import {InputComponent} from '../input/input.component';
import {TaskCardComponent} from '../task-card/task-card.component';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  private readonly notifier: NotifierService;
  @ViewChildren(InputComponent) inputComponents: QueryList<InputComponent>;
  @ViewChild(TaskCardComponent) taskInfoCard;
  project: Project = {name: '', descriptions: '', id: -1, priority: 1};
  tasks: Task[] = [];
  priority = '1';
  currentTask = {name: '', priority: 0, id: -1, projectId: -1, startDate: '4/13/2019', tags: []};

  constructor(private projectsService: ProjectsService, notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.projectsService.getCurrentProject().subscribe(res => {this.project = res; this.priority = res.priority + ''; }, (e) => {},
      () => this.projectsService.getTasksInCurrentProject().subscribe(res => this.tasks = res));
  }

  saveProjectInfo() {
    this.projectsService.saveProjectInfo(this.inputComponents.first.value, this.inputComponents.last.value, +this.priority, this.project)
      .subscribe(res => this.project = res, (e) => {},
        () => this.notify('success', 'changes saved'));
  }

  taskClicked(task: Task) {
    this.currentTask = task;
  }

  saveTaskChanges() {
    const task = {
      name: this.taskInfoCard.getName(),
      priority: this.taskInfoCard.getPriority(),
      id: this.currentTask.id,
      projectId: this.currentTask.projectId,
      duration: this.taskInfoCard.getTimeMeasure(),
      startDate: this.taskInfoCard.getStartDate(),
      tags: this.taskInfoCard.getTags(),
    };

    const index = ProjectsService.getTaskIndex(task, this.tasks);

    this.projectsService.saveTask(task).subscribe(res => {
      this.currentTask = res;
      this.tasks[index] = res;
    }, (e) => {},
      () => this.notify('success', 'changes saved'));
  }

  addNewTask() {
    let taskId;
    this.projectsService.getNewTaskId().subscribe(res => taskId = res, (e) => {},
      () => this.projectsService.addNewTask(this.project.id, taskId).subscribe(res => this.tasks.push(res), (e) => {},
        () => this.projectsService.getTasksInCurrentProject().subscribe(res => this.tasks = res)));
  }

  deleteTask(task: Task) {
    this.projectsService.deleteTask(task).subscribe(res => this.tasks = this.tasks.filter(t => t.id !== res.id));
  }

  notify(type: string, message: string) {
    this.notifier.notify( type, message);
  }
}
