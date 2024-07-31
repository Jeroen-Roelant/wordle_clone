import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-letter-box',
  templateUrl: './letter-box.component.html',
  styleUrls: ['./letter-box.component.css']
})
export class LetterBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() letter: string = "";
  @Input() status: number = 1;

}
