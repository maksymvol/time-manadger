import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';


import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProjectsListComponent} from './projects-list/projects-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ServerService} from './server.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TasksPreviewListComponent} from './tasks-preview-list/tasks-preview-list.component';
import {ProjectCardComponent} from './project-card/project-card.component';
import {ProjectPageComponent} from './project-page/project-page.component';
import {TasksComponent} from './tasks/tasks.component';
import {TaskComponent} from './task/task.component';
import {ProjectsService} from './projects.service';
import {InputComponent} from './input/input.component';
import {TaskCardComponent} from './task-card/task-card.component';
import {TimePlanningPageComponent} from './time-planning-page/time-planning-page.component';
import {SheduleCardComponent} from './shedule-card/shedule-card.component';
import {SheduleComponent} from './shedule/shedule.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    TasksPreviewListComponent,
    ProjectCardComponent,
    ProjectPageComponent,
    TasksComponent,
    TaskComponent,
    InputComponent,
    TaskCardComponent,
    TimePlanningPageComponent,
    SheduleCardComponent,
    SheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    BrowserAnimationsModule,
    MatExpansionModule,
    MatCardModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule
  ],
  providers: [
    ServerService,
    ProjectsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'clear',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/clear-icon.svg'));

    iconRegistry.addSvgIcon(
      'delete',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/delete-icon.svg'));
  }
}
