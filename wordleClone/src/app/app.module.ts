import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LetterGridComponent } from './letter-grid/letter-grid.component';
import { LetterBoxComponent } from './letter-box/letter-box.component';
import { LetterRowComponent } from './letter-row/letter-row.component';
import { GameServiceService } from './game-service.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LetterGridComponent,
    LetterBoxComponent,
    LetterRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GameServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
