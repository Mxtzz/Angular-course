import { Component, OnInit ,Input, EventEmitter, Output} from '@angular/core';
import { TodolistService } from "./../listservice/todolist.service";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  providers:[TodolistService]
})
export class TodolistComponent implements OnInit {

  constructor(private service:TodolistService) { }

  ngOnInit() {
  }

  @Output() dataInput = new EventEmitter();

  tolist = [];
  content = '';
  
  addData(){
    this.tolist.push(this.content);
    this.dataInput.emit(this.content);
    this.content = '';
  }
  keyData(e){
    if(e.keyCode==13){
      this.tolist.push(this.content);
      this.content = '';
    }
  }
}


