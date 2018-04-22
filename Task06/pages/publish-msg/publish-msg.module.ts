import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublishMsgPage } from './publish-msg';

@NgModule({
  declarations: [
    PublishMsgPage,
  ],
  imports: [
    IonicPageModule.forChild(PublishMsgPage),
  ],
})
export class PublishMsgPageModule {}
