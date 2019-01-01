import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TasksComponent} from "./tasks/tasks.component";
import {EditTaskComponent} from "./edit-task/edit-task.component";
import {AddTaskComponent} from "./add-task/add-task.component";
import {DetailsTaskComponent} from "./details-task/details-task.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: 'tasks', component: TasksComponent},
  {path: 'tasks/new', component: AddTaskComponent},
  {path: 'tasks/details', component: DetailsTaskComponent},
  {path: 'tasks/:id', component: EditTaskComponent},
  {path: '', component: AppComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
