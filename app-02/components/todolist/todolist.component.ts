import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(private service:ListService) { }

  ngOnInit() {
  }

  item = '';
  // list = [];
  addItem(){
    // this.list.push(this.item);
    this.service.push(this.item);
    this.item = "";
    // console.log(this.list);
  }
}
