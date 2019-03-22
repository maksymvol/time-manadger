import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from './Project';
import {Task} from './Task';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  ROOT_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getProjects(): Observable<Project> {
    return this.http.get<Project>(this.ROOT_URL + '/projects');
  }

  getTasks(): Observable<Task> {
    return this.http.get<Task>(this.ROOT_URL + '/tasks');
  }
}