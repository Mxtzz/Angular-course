import { Injectable } from '@angular/core';

@Injectable()
export class ListService {

  constructor() { }

  list=[];

  push(str: any) {
    this.list.push(str);
  }

  splice(index){
    this.list.splice(index,1)
  }


  setItem(id,list){
    localStorage.setItem(id,JSON.stringify(list));
    console.log(localStorage);
  }

}
