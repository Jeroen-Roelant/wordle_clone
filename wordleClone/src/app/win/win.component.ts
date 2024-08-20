import { Component, OnInit } from '@angular/core';
import { GameServiceService } from '../game-service.service';

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.css']
})
export class WinComponent implements OnInit {

  constructor(private gameService: GameServiceService) { }

  ngOnInit(): void {

  }

  word: string = this.gameService.currentWord;
  guesses: number = this.gameService.guesses.length;

}
