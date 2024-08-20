import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { GameServiceService } from '../game-service.service';

@Component({
  selector: 'app-letter-box',
  templateUrl: './letter-box.component.html',
  styleUrls: ['./letter-box.component.css']
})
export class LetterBoxComponent implements OnInit, OnChanges {
// export class LetterBoxComponent implements OnInit {

  constructor(private gameService: GameServiceService) { }

  ngOnInit(): void {
    this.gameService.wordleObjectsUpdated.subscribe((wordleObjects) => {
      this.updateContentAndStatus();
    });
  }
  
  @Input() id: number = 0;
  @Input() rId: number = 0;

  content?: string;
  status?: number;

    
  ngOnChanges(changes: SimpleChanges): void {
    if (this.gameService.wordleObjects) {
      this.updateContentAndStatus();
    }
  }

  private updateContentAndStatus(): void {
    console.log(this.id, this.rId);
    this.content = (this.gameService.wordleObjects[this.rId] && this.gameService.wordleObjects[this.rId].letters) 
      ? this.gameService.wordleObjects[this.rId].letters[this.id] || ''
      : '';

    this.status = (this.gameService.wordleObjects[this.rId] && this.gameService.wordleObjects[this.rId].colors)
      ? this.gameService.wordleObjects[this.rId].colors[this.id] || 0
      : 0;
    // this.changeDetectorRef.detectChanges()
  }
}
