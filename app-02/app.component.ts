import { Component } from '@angular/core';
import { TodolistService } from "./listservice/todolist.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TodolistService]
})
export class AppComponent {
  
  constructor(private service:TodolistService) { }

  ngOnInit() {
    this.tolist = this.service.tolist;
  }

  tolist = [];

  dataInput(data){
    this.tolist.push(data);
  }

}
