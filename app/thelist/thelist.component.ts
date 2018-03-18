import { Component, OnInit ,Input, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-thelist',
  templateUrl: './thelist.component.html',
  styleUrls: ['./thelist.component.css']
})
export class ThelistComponent implements OnInit {

  @Input() tolist;

  constructor() { }

  ngOnInit() {
  }

  // tolist = [];
  comlist = [];
  content = '';
  
  change(i){
    this.comlist.push(this.tolist[i])
    this.tolist.splice(i,1);
  }

  delData(i){
    this.tolist.splice(i,1);
  }
  
  delData2(i){
    this.comlist.splice(i,1);
  }
  changeData2(i){
    this.tolist.push(this.comlist[i]);
    this.comlist.splice(i,1);
  }
}
