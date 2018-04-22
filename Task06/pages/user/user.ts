import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { MypublishPage } from '../mypublish/mypublish';
import { MycoopPage } from '../mycoop/mycoop';
import { SettingPage } from '../setting/setting';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private app:App
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }
  button1_3=[
    {src:'assets/user/user01.png',name:'芽币'},
    {fun:'mypub()',src:'assets/user/user02.png',name:'我发布的'},
    {src:'assets/user/user03.png',name:'我合作的'}
  ]
  button4_9=[
    {src:'assets/user/user04.png',name:'我的收藏'},
    {src:'assets/user/user05.png',name:'我的草稿箱'},
    {src:'assets/user/user06.png',name:'视频发布'},
    {src:'assets/user/user07.png',name:'完善信息'},
    {src:'assets/user/user08.png',name:'VIP等级'},
    {src:'assets/user/user09.png',name:'账户安全'},
    {src:'assets/user/user09.png',name:'帮助与反馈'},
    {src:'assets/user/user09.png',name:'设置'}
  ]
  mybtn1(i){
    if(i==1){
      this.app.getRootNav().push(MypublishPage);
    }else if(i==2){
      this.app.getRootNav().push(MycoopPage);
    }
  }
  mybtn2(i){
    if(i==7){
      this.app.getRootNav().push(SettingPage);
    }
  }
}
