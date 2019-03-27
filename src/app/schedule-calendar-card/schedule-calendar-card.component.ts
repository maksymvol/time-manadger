import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-shedule-card',
  templateUrl: './schedule-calendar-card.component.html',
  styleUrls: ['./schedule-calendar-card.component.css']
})
export class ScheduleCalendarCardComponent implements OnInit {

  @Input() day: Date;
  @Input() dayInfo: any;
  @Output() handleDateClicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  dateClicked() {
    this.handleDateClicked.emit(this.day);
  }
}
