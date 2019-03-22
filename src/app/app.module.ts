import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TasksListComponent} from './tasks-list/tasks-list.component';
import {ProjectsListComponent} from './projects-list/projects-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ServerService} from './server.service';
import {ProjectsResolve} from './projects-resolve';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    ProjectsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ServerService,
    ProjectsResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
