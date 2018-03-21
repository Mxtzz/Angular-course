import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { ThelistComponent } from './components/thelist/thelist.component';
import { ListService } from './services/list.service';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    ThelistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
