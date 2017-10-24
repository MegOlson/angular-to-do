import { Component, Input } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
    <ul>
      <li [class]="priorityColor(currentTask)" *ngFor="let currentTask of childTaskList">{{currentTask.description}} <button (click)="editTask(currentTask)">Edit!</button></li>
    </ul>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];

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
