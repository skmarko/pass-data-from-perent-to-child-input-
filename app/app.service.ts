import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  add(a,b){
    let txt = "service access in contact"
    console.log(txt);
  		return a + b;
  }

  mk(){
    let txt1="sencond function  success";
    console.log(txt1);
  }
}
