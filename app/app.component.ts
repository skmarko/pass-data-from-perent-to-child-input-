import { Component } from '@angular/core';
import { from } from 'rxjs';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exam';
  response = 0;
  constructor(private appservice: AppService) { }

  	myClick = function(a,b){
  			let res = this.appservice.add(a,b);
  			this.response = res;
	}
}
