import {Component, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {InputComponent} from '../input/input.component';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  @ViewChildren(InputComponent) inputComponent: QueryList<InputComponent>;
  @Input() task;
  @Input() priority;
  @Input() date: string;

  constructor() {
  }

  ngOnInit() {
  }

  getName() {
    return this.inputComponent.first.value;
  }

  getPriority() {
    return this.priority;
  }

  getDate() {
    return this.date;
  }

  getTimeMeasure() {
    return this.inputComponent.last.value;
  }
}
