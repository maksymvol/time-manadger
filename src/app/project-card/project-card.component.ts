import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() project;
  @Input() tasks;
  @Output() handleCardClicked = new EventEmitter();
  @Output() handleDeleteProject = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  cardClicked() {
    this.handleCardClicked.emit(this.project);
  }

  handleDeleteButton() {
    this.handleDeleteProject.emit(this.project);
  }
}
