import { Component } from '@angular/core';

@Component({
  selector: 'app-divya',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  num1=15;
  num2=15;
  displayDate=function()
  {
    return new Date();
  }

}
