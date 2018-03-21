import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-thelist',
  templateUrl: './thelist.component.html',
  styleUrls: ['./thelist.component.css'],
  providers:[ListService]
})
export class ThelistComponent implements OnInit {

  constructor(private service:ListService) { }

  list = [];
  ngOnInit() {
    this.list = this.service.list;
  }
  delItem(index){
    this.service.splice(index);
  }
}
