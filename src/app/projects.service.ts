import {Injectable} from '@angular/core';
import {Project} from './Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [];

  constructor() {}
}
