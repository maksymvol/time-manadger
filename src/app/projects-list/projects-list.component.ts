import {Component, OnInit} from '@angular/core';
import {ServerService} from '../server.service';
import {ActivatedRoute} from '@angular/router';
import {Project} from '../Project';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  projects: Project[] = [];

  constructor(
    private serverService: ServerService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.projects = this.route.snapshot.data.projects;
  }

}
