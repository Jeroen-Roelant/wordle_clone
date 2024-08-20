import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-letter-row',
  templateUrl: './letter-row.component.html',
  styleUrls: ['./letter-row.component.css']
})
export class LetterRowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() id: number = 0;

}
