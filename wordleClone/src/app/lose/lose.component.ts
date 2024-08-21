import { Component, OnInit } from '@angular/core';
import { GameServiceService } from '../game-service.service';

@Component({
  selector: 'app-lose',
  templateUrl: './lose.component.html',
  styleUrls: ['./lose.component.css']
})
export class LoseComponent implements OnInit {
  constructor(private gameService: GameServiceService) { }

  ngOnInit(): void {

  }

  word: string = this.gameService.currentWord;
  guesses: number = this.gameService.guesses.length;

  newGame(){
    window.location.reload();;
  }

  goToPortfolio(){
    window.open("https://jeroenroelant.tech", "_blank");
  }


}
