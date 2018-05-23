import { Component, ViewEncapsulation } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  @Input() labelEmail = 'Email';
  @Input() labelPassword = 'Password';
  @Output() onSuccess = new EventEmitter()

  login: string = "";
  password: string = "";

  submit() {
    this.onSuccess.emit({login: this.login})
    this.password = "";
    this.login = "";
  }
}
