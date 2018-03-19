import { Component, OnInit ,Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  @Output() dataInput = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  tolist = [];
  // comlist = [];
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


