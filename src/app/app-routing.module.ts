import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsListComponent} from './projects-list/projects-list.component';
import {ProjectPageComponent} from './project-page/project-page.component';
import {TimePlanningPageComponent} from './time-planning-page/time-planning-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  {path: 'projects', component: ProjectsListComponent},
  {path: 'projects/:value', component: ProjectPageComponent},
  {path: 'planning', component: TimePlanningPageComponent},
  // {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
