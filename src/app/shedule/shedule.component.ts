import {Component, Input, OnInit} from '@angular/core';
import {TimeService} from '../time.service';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.css']
})
export class SheduleComponent implements OnInit {

  @Input() projects;
  @Input() tasks;
  @Input() endDate;
  @Input() currentDate;
  @Input() displayMode;

  constructor() {
  }

  ngOnInit() {
  }

  getScheduleDays() {
    return TimeService.getDatesFromTo(this.currentDate, this.endDate);
  }

  getMonthDays(currentDate) {
    return TimeService.getMonthDays(currentDate);
  }

  handleDateClicked(day: Date) {
    console.log(day);
  }

  getDayInfo(day: Date) {
    return TimeService.getDayInfo(day, this.tasks);
  }
}
