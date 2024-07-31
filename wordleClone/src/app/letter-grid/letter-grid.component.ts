import { Component, OnInit } from '@angular/core';
import { GameServiceService } from '../game-service.service';

@Component({
  selector: 'app-letter-grid',
  templateUrl: './letter-grid.component.html',
  styleUrls: ['./letter-grid.component.css']
})
export class LetterGridComponent implements OnInit {

  constructor(private gameService: GameServiceService) { }

  ngOnInit(): void {
  }

}
