import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  @Input() tasks: Task[];

  constructor() {
  }

  ngOnInit() {
  }

}
