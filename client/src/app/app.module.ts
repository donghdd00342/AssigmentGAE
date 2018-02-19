import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ShareModule} from './share/share.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ShareModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
