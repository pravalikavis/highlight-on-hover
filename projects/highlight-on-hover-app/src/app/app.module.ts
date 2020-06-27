import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HighlighterDirective} from 'highlight-on-hover';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlighterDirective
  ],
  imports: [
    BrowserModule,
    // HighlighterDirective
  ],
  // exports:[HighlighterDirective],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
