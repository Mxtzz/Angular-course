import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor() { }

  ngOnInit() {
  }

  tolist = [];
  // comlist = [];
  // content = '';

  dataInput(data){
    this.tolist.push(data);
  }

  // addData(){
  //   this.tolist.push(this.content);
  //   this.content = '';
  // }
  // keyData(e){
  //   if(e.keyCode==13){
  //     this.tolist.push(this.content);
  //     this.content = '';
  //   }
  // }
}
