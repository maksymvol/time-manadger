import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from './Project';
import {Task} from './Task';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  ROOT_URL = 'http://localhost:4001';

  constructor(private http: HttpClient) {
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.ROOT_URL + '/projects');
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.ROOT_URL + '/tasks');
  }

  getProjectById(id): Observable<Project> {
    return this.http.get<Project>(this.ROOT_URL + '/projects/' + id, );
  }

  getTasksInCurrentProject(id): Observable<Task[]> {
    return this.http.get<Task[]>(this.ROOT_URL + '/projects/' + id + '/tasks');
  }

  addNewProject(projectName: string, newId: number) {
    return this.http.post<Project>(this.ROOT_URL + '/projects/', {name: projectName, descriptions: 'Project description', id: newId});
  }

  deleteProject(id: number) {
    return this.http.delete(this.ROOT_URL + '/projects/' + id);
  }
}
