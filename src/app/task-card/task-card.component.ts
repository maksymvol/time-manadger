import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {InputComponent} from '../input/input.component';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  @ViewChild(InputComponent) inputComponent;
  @Input() task;
  @Input() priority;
  @Input() date: string;

  // TODO fix date picker value binding
  constructor() {
  }

  ngOnInit() {
  }

  getName() {
    return this.inputComponent.value;
  }

  getPriority() {
    return this.priority;
  }

  getDate() {
    return this.date;
  }
}
