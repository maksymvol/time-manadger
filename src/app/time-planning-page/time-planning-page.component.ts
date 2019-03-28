import {Component, OnInit} from '@angular/core';
import {ProjectsService} from '../projects.service';
import {TimeService} from '../time.service';

@Component({
  selector: 'app-time-planning-page',
  templateUrl: './time-planning-page.component.html',
  styleUrls: ['./time-planning-page.component.css']
})
export class TimePlanningPageComponent implements OnInit {

  tasks;
  projects;
  currentDate: string;
  endDate: string;
  displayMode = 'dayCards';
  skipEmptyDays = true;

  // dayCards, calendar

  constructor(private projectsService: ProjectsService) {
    this.projectsService.getProjects().subscribe(res => this.projects = res);
    this.projectsService.getTasks().subscribe(res => this.tasks = res, (e) => {
      },
      () => {
        this.endDate = TimeService.getEndDate(this.tasks);
      });
    this.currentDate = TimeService.getCurrentDate();
  }

  ngOnInit() {
  }

}
