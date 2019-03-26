import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  @Input() tasks: Task[];
  @Output() taskClicked = new EventEmitter();
  @Output() newTaskClicked = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  handleTaskClicked(task: Task) {
    this.taskClicked.emit(task);
  }

  handleNewTaskClicked() {
    this.newTaskClicked.emit();
  }
}
