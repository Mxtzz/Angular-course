import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http,Jsonp } from '@angular/http';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public http:Http, 
    public navParams: NavParams,
    public jsonp:Jsonp,
    private alertCtrl:AlertController
  ) {}

  //输入为空时
  Alertnull() {  
    let alert = this.alertCtrl.create({  
      title: '请输入用户名和密码',  
      subTitle: '用户名和密码都不能为空哦！',  
      buttons: ['取消']  
    });  
    alert.present();  
  }  
  //返回值0时
  Alert0() {  
    let alert = this.alertCtrl.create({  
      title: '用户名不存在',  
      subTitle: '请重新输入用户名',  
      buttons: ['取消']  
    });  
    alert.present();  
  }  
  //返回值2时
  Alert2() {  
    let alert = this.alertCtrl.create({  
      title: '用户名密码不符！',  
      subTitle: '请重新输入密码',  
      buttons: ['取消']  
    });  
    alert.present();  
  }  

  login(username,password){
    console.log(username,password);
    if(username === ""||password===""){
      this.Alertnull();
    }else{
      var myurl='http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID='+ username +'&password='+ password ;
      this.http.get(myurl).subscribe(data=>{
        // console.log(data);
        console.log(JSON.parse(data['_body']));
        if(JSON.parse(data['_body'])==0){
          this.Alert0();
        }else if(JSON.parse(data['_body'])==2){
          this.Alert2();
        }else{
          this.navCtrl.push(TabsPage);
        }
      },err=>{
        console.log(err);
      });
    } 
  }

  ionViewDidLoad() {
    //重新注册了账号
    // this.http.get('http://datainfo.duapp.com/shopdata/userinfo.php?status=register&userID=mazw2016@hotmail.com&password=124357').subscribe(data=>{
    //   console.log(data);
    //   console.log(JSON.parse(data['_body']));
    // },err=>{
    //   console.log(err);
    // });

  }

  

}
