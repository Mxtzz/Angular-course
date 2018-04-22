import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { PublishPage } from '../publish/publish';
import { HomePage } from '../home/home';
import { MessagePage } from '../message/message';
import { UserPage } from '../user/user';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PublishPage;
  tab3Root = MessagePage;
  tab4Root = UserPage;

  constructor(public navCtrl: NavController){}

}
