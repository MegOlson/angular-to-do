import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
    <ul>
      <li [class]="priorityColor(currentTask)" *ngFor="let currentTask of tasks">{{currentTask.description}} <button (click)="editTask(currentTask)">Edit!</button></li>
    </ul>
  `
})

export class TaskListComponent {
  tasks: Task[] = [
    new Task('Finish angular homework', 3),
    new Task('Brainstorm group projects', 2),
    new Task('Add READMEs to repos', 2)
  ];

  priorityColor(currentTask){
    if (currentTask.priority === 3){
      return "bg-danger";
    } else if (currentTask.priority === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }
}
