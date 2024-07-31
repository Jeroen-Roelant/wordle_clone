import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LetterGridComponent } from './letter-grid/letter-grid.component';
import { LetterBoxComponent } from './letter-box/letter-box.component';
import { LetterRowComponent } from './letter-row/letter-row.component';

@NgModule({
  declarations: [
    AppComponent,
    LetterGridComponent,
    LetterBoxComponent,
    LetterRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
