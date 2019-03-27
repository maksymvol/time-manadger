import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-schedule-day-card',
  templateUrl: './schedule-day-card.component.html',
  styleUrls: ['./schedule-day-card.component.css']
})
export class ScheduleDayCardComponent implements OnInit {

  @Input() day: Date;
  @Input() dayInfo: any;

  constructor() {
  }

  ngOnInit() {
  }

}
