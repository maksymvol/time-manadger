import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../Task';

@Component({
  selector: 'app-tasks-preview-list',
  templateUrl: './tasks-preview-list.component.html',
  styleUrls: ['./tasks-preview-list.component.css']
})
export class TasksPreviewListComponent implements OnInit {

  @Input() tasks: Task[];

  constructor() {
  }

  ngOnInit() {
  }

}
