import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My super Angular 5 app';

  onSuccess(event) {
    console.log(`Welcome ${event.detail.login}, you were successfully logged`)
  }
}
