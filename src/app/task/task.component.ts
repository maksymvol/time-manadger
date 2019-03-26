import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../Task';
import {TimeService} from '../time.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Input() currentTask: Task;

  constructor() {
  }

  ngOnInit() {
  }

  getDate() {
    return TimeService.getTimeString(new Date(this.task.expirationDate), true);
  }
}
