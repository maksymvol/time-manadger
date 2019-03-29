import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Input() currentTask: Task;
  @Output() deleteTask = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  getDate() {
    return new Date(this.task.startDate).toDateString();
  }

  handleDeleteButton() {
    this.deleteTask.emit(this.task);
  }
}
