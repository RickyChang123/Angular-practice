import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  exports: [TasksComponent], //只有TasksComponent需導出，因為tasks就用到task,new-Task
  imports: [CommonModule, FormsModule, SharedModule], //CommonModule裡有DatePipe
})
export class TasksModule {}
