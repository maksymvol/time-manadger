import {Injectable} from '@angular/core';
import {Project} from './Project';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {ServerService} from './server.service';

@Injectable()
export class ProjectsResolve implements Resolve<Project> {
  constructor(private serverService: ServerService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Project> {
    return this.serverService.getProjects();
  }
}
