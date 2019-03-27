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
  @Input() startDate: string;

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

  getStartDate() {
    return this.startDate;
  }

  getTimeMeasure() {
    return this.inputComponent.last.value;
  }
}
