import {Component, Input, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren} from '@angular/core';
import {InputComponent} from '../input/input.component';
import {TimeService} from '../time.service';
import {InputTagsComponent} from '../input-tags/input-tags.component';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit, OnChanges {

  @ViewChildren(InputComponent) inputComponent: QueryList<InputComponent>;
  @ViewChild('tagsInput') tagsInput: InputTagsComponent;
  @Input() task;
  tags: string[];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const t = changes.task;
    this.tags = t.currentValue.tags.map(tag => tag.tag);
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
    return this.tagsInput.tags.map(t => ({tag: t}));
  }

  getTagsInitial(): string[] {
    if (this.task.tags.length === 0) {
      return [''];
    }
    return this.task.tags.map(tag => tag.tag)
      .filter(tag => tag !== '' && tag != null && tag != ',' && tag != ', ');
  }

  private getChild(placeholder) {
    return this.inputComponent.find(item => item.placeholder === placeholder);
  }

  getAllTags() {
    return TimeService.tags;
  }
}
