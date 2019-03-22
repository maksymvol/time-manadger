import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsListComponent} from './projects-list/projects-list.component';
import {TasksListComponent} from './tasks-list/tasks-list.component';
import {ProjectsResolve} from './projects-resolve';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  {path: 'projects', component: ProjectsListComponent, resolve: {projects: ProjectsResolve}},
  {path: 'projects/:id', component: TasksListComponent},
  // {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
