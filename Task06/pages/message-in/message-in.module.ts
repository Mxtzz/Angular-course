import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessageInPage } from './message-in';

@NgModule({
  declarations: [
    MessageInPage,
  ],
  imports: [
    IonicPageModule.forChild(MessageInPage),
  ],
})
export class MessageInPageModule {}
