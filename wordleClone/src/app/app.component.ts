import { Component } from '@angular/core';
import { GameServiceService } from './game-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wordleClone';

  constructor(public gameService: GameServiceService){
  }

  makeGuess(){
    const word = (<HTMLInputElement>document.getElementById('textInput')).value;
    this.gameService.makeGuess(word);
  }
  
}

