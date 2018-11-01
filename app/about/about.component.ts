import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
   @Input() name: string;
  details(){
    alert("mouseover Event success")
  }

  constructor() { }

  ngOnInit() {
  }

}
