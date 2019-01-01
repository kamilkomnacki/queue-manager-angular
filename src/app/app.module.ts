import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { DetailsTaskComponent } from './details-task/details-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import {HttpClientModule} from "@angular/common/http";
import {TaskService} from "../service/task.service";

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    AddTaskComponent,
    DetailsTaskComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
