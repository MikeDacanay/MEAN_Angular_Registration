import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { NavComponnentComponent } from './nav-componnent/nav-componnent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    NavComponnentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
