import {Component} from '@angular/core';
import {ProjectsService} from './projects.service';
import {NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isInPlanningPage = true;

  constructor(private projectService: ProjectsService) {
    this.projectService.getRouteUrl().subscribe( (navEnd: NavigationEnd) => {
      this.isInPlanningPage = navEnd.urlAfterRedirects.split('/')[1] !== 'planning';
    });
  }

  generateButtonClicked() {
    this.projectService.navigateTo('/planning');
  }
}
