import { Component, OnInit } from '@angular/core';
import { Http, Jsonp } from '@angular/http';

@Component({
  selector: 'app-goodlist',
  templateUrl: './goodlist.component.html',
  styleUrls: ['./goodlist.component.css']
})
export class GoodlistComponent implements OnInit {

  constructor(public http:Http,public jsonp:Jsonp) { }

  list:number[]=[1,2,3,4,5];
  // headers = new Headers({'Content-Type':''});

  ngOnInit() {
    // this.http.get('http://datainfo.duapp.com/shopdata/getclass.php').subscribe(data=>{
    //   console.log(JSON.parse(data['_body']));
    //   this.list = JSON.parse(data['_body']);
    // },err=>{
    //   console.log(err);
    // });

    this.jsonp.get('http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK').subscribe(data=>{
      console.log(data['_body']);
      this.list = data['_body'];
    },err=>{
      console.log(err);
    });
  }

}
