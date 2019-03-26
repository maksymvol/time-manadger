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
  currentDate;
  endDate;

  constructor(private projectsService: ProjectsService, private timeService: TimeService) {
    this.projectsService.getTasks().subscribe(res => this.tasks = res);
    this.projectsService.getProjects().subscribe(res => this.projects = res);

    this.currentDate = TimeService.getCurrentDate();
    this.endDate = TimeService.getEndDate(this.tasks);
  }

  ngOnInit() {
  }

}
