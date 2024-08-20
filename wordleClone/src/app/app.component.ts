import { Component } from '@angular/core';
import { GameServiceService } from './game-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wordle 2';

  constructor(public gameService: GameServiceService){
  }

  guess: string = "";

  makeGuess(){
    if((<HTMLInputElement>document.getElementById('textInput')).value.length === 5){
      const word = (<HTMLInputElement>document.getElementById('textInput')).value;
      (<HTMLInputElement>document.getElementById('textInput')).value = "";
      this.gameService.makeGuess(word);
    }
  }
}

