import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [AppComponent, UserComponent, HeaderComponent], //non-standalone component
  bootstrap: [AppComponent], //告訴Angular這root component
  imports: [BrowserModule, SharedModule, TasksModule], //standalone component
})
export class AppModule {}
