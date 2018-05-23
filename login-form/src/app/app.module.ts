import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Injector } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const myElement = createCustomElement(AppComponent, {injector})
    customElements.define('login-form', myElement)
  }

  ngDoBootstrap() {}
}
