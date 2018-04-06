import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  items=[
    1,2,3,4,5,
    1,2,3,4,5,
    1,2,3,4,5
    // {id:0},
    // {id:1}
  ];
  btn=[
    {src:"../../assets/icon/home-icon4.png",p:'资产包转让'},
    {src:"../../assets/icon/home-icon4.png",p:'债权转让'},
    {src:"../../assets/icon/home-icon4.png",p:'固产转让'},
    {src:"../../assets/icon/home-icon4.png",p:'商业保理'}
  ]
  doInfinite(){
    console.log("上拉刷新");
  }
}
