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

  constructor() {
  }

  ngOnInit() {
  }

  getName() {
    return this.getChild('Task name').value;
  }

  getPriority() {
    return this.task.priority;
  }

  getStartDate() {
    return this.task.startDate;
  }

  getTimeMeasure() {
    return this.getChild('Duration').value;
  }

  getTags() {
    return this.getChild('Tags').value;
  }

  getTagsInitial(): string {
    if (this.task.tags.length === 0) {
      return '';
    }
    return this.task.tags.reduce((acc, cur) => {
      return acc + cur.tag + ', ';
    }, '');
  }

  private getChild(placeholder) {
    return this.inputComponent.find(item => item.placeholder === placeholder);
  }
}
