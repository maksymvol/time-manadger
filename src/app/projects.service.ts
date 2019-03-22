import {Injectable} from '@angular/core';
import {ServerService} from './server.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private serverService: ServerService) {
  }

  getProjects() {
    return this.serverService.getProjects();
  }

  getTasks() {
    return this.serverService.getTasks();
  }
}
