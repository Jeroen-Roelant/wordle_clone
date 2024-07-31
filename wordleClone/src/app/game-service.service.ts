import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor() { }

  ngOnInit(): void {
    this.currentWord = this.getWord();
  }

  words: string[] = ["APPLE","BEARS","CATCH","DOZER","EAGER","FAITH","GHOST","HUMOR","IVORY","JUMBO","KNOCK","LEMON","MAGIC","NIGHT","OASIS","PUNCH","QUICK","RAVEN","SALAD","TANGO","UNDER","VIVID","WHALE","XENON","YACHT","ZEBRA","ALERT","BRAVE","CHAOS","DREAM","ELITE","FLAME","GRACE","HEART","IMAGE","JAZZY","KINGS","LOVER","MUSIC","NIGHT","OCEAN","PANDA","QUEEN","RADIO","SUNNY","TIGER","UNITY","VIBES","WORLD","YOUTH","ZESTY","AMAZE","BLISS","CHEER","DELUX","EAGER","FANCY","GREAT","HAPPY","IDEAL","JOLLY","KINDS","LUCKY","MERRY"];

  guesses: string[] = [];

  currentWord: string = "";

  getWord():string{
    return this.words[Math.floor(Math.random()*this.words.length)];
  }

  makeGuess(guess:string){
    this.guesses.push(guess);
  }

  checkGuess(word:string){
    let returnArray: number[] = [];

    let letters = word.split('');

    letters.forEach(letter => {
      if (this.currentWord.includes(letter) && letter.indexOf(letter) == this.currentWord.indexOf(letter)){
        returnArray.push(2);
      }
      else if (this.guesses.includes(letter)){
        returnArray.push(1);
      }
      else{
        returnArray.push(0);
      }
    })

    let score = returnArray.reduce((a,b) => a+b, 0);

    if (score == 10){
      this.Win();
    }
    else if (this.guesses.length >= 6){
        this.Lose();
      }
    return returnArray;
  }

  Win(){
    
  }

  Lose(){

  }
}
