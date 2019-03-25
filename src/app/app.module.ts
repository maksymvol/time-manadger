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

@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    TasksPreviewListComponent,
    ProjectCardComponent,
    ProjectPageComponent,
    TasksComponent,
    TaskComponent,
    InputComponent
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
    MatSelectModule
  ],
  providers: [
    ServerService,
    ProjectsService
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
