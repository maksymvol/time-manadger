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

  constructor() {
  }

  ngOnInit() {
  }

  getScheduleDays() {
    return TimeService.getDatesFromTo(this.currentDate, this.endDate);
  }

}
