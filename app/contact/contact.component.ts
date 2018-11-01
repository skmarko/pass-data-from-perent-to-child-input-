import { Component, OnInit,Input } from '@angular/core';

import { from } from 'rxjs';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() name:string;
  fun(){
    alert("sk mark 007 ")
  }


  constructor() { }

  ngOnInit() {
  }

}
