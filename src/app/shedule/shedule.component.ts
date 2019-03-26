import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.css']
})
export class SheduleComponent implements OnInit {

  @Input() projects;
  @Input() tasks;

  constructor() {
  }

  ngOnInit() {
  }

}
