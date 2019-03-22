import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TasksListComponent} from './tasks-list/tasks-list.component';
import {ProjectsListComponent} from './projects-list/projects-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ServerService} from './server.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { TasksPreviewListComponent } from './tasks-preview-list/tasks-preview-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    ProjectsListComponent,
    TasksPreviewListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [
    ServerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
