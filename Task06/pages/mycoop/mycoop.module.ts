import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MycoopPage } from './mycoop';

@NgModule({
  declarations: [
    MycoopPage,
  ],
  imports: [
    IonicPageModule.forChild(MycoopPage),
  ],
})
export class MycoopPageModule {}
