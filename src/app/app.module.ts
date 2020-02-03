import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AulavirtualComponent } from './aulavirtual/aulavirtual/aulavirtual.component';

@NgModule({
  declarations: [
    AppComponent,
    AulavirtualComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
