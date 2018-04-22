import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';

import { PublishMsgPage } from '../publish-msg/publish-msg';

@Component({
  selector: 'page-publish',
  templateUrl: 'publish.html'
})
export class PublishPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private app:App
  ) {
  }

  pub_type_btn=[
    {src:'assets/publish/pub-type01.png',name:'资产包转让'},
    {src:'assets/publish/pub-type02.png',name:'债权转让'},
    {src:'assets/publish/pub-type03.png',name:'固产转让'},
    {src:'assets/publish/pub-type04.png',name:'典当担保'},
    {src:'assets/publish/pub-type05.png',name:'融资借贷'},
    {src:'assets/publish/pub-type06.png',name:'悬赏信息'},
    {src:'assets/publish/pub-type07.png',name:'商业保理'},
    {src:'assets/publish/pub-type08.png',name:'尽职调查'},
    {src:'assets/publish/pub-type09.png',name:'资产求购'},
    {src:'assets/publish/pub-type10.png',name:'委外催收'},
    {src:'assets/publish/pub-type11.png',name:'法律服务'}
  ]
  pub(){
    this.app.getRootNav().push(PublishMsgPage);
  }
}
