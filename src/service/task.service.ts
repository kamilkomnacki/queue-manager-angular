import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Task} from "protractor/built/taskScheduler";

@Injectable()
export class TaskService{

  urlTasks: string =  "http://localhost:8080/tasks";

  constructor(private http: HttpClient){}

  getAllTasks(){
    this.http.get<Task[]>(this.urlTasks);
  }

  getOneById(id: number){
    this.http.get<Task>(this.urlTasks + "/" + id)
  }

  saveTask(task: Task){
    this.http.post(this.urlTasks, task);
  }

  updateTask(task: Task){
    this.http.put(this.urlTasks, task);
  }

  deleteTask(id: number){
    this.http.delete(this.urlTasks + "/" + id);
  }

  //4:38, odc 2.
}
