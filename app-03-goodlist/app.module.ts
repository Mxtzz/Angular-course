import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GoodlistComponent } from './components/goodlist/goodlist.component';


@NgModule({
  declarations: [
    AppComponent,
    GoodlistComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
