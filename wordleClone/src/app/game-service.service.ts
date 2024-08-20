import { Injectable, EventEmitter } from '@angular/core';
import { wordleObject } from './wordleObject';

@Injectable({
  providedIn: 'root'
})

export class GameServiceService {

  constructor() { 
    this.currentWord = this.getWord();
  }

  wordleObjects: wordleObject[] = [];
  wordleObjectsUpdated: EventEmitter<wordleObject[]> = new EventEmitter<wordleObject[]>();

  addWordleObject(wordleObject: wordleObject){
    this.wordleObjects.push(wordleObject);
    this.wordleObjectsUpdated.emit(this.wordleObjects);
  }

  getWordleObjects(){
    return this.wordleObjects;
  }

  words: string[] = ["APPLE","BEARS","CATCH","DOZER","EAGER","FAITH","GHOST","HUMOR","IVORY","JUMBO","KNOCK","LEMON","MAGIC","NIGHT","OASIS","PUNCH","QUICK","RAVEN","SALAD","TANGO","UNDER","VIVID","WHALE","XENON","YACHT","ZEBRA","ALERT","BRAVE","CHAOS","DREAM","ELITE","FLAME","GRACE","HEART","IMAGE","JAZZY","KINGS","LOVER","MUSIC","NIGHT","OCEAN","PANDA","QUEEN","RADIO","SUNNY","TIGER","UNITY","VIBES","WORLD","YOUTH","ZESTY","AMAZE","BLISS","CHEER","DELUX","EAGER","FANCY","GREAT","HAPPY","IDEAL","JOLLY","KINDS","LUCKY","MERRY"];

  guesses: string[] = [];

  currentWord: string = "";

  getWord():string{
    let word = this.words[Math.floor(Math.random()*this.words.length)];
    console.log(word);
    return word;
  }

  makeGuess(guess:string){
    let guessCaps = guess.toUpperCase();

    console.log(`guessing ${guessCaps}`);
    this.guesses.push(guessCaps);

    let result = this.checkGuess(guessCaps);
    console.log(result);

  }

  checkGuess(word:string){
    let returnArray: number[] = [];

    let letters = word.split('');
    console.log(letters);

    let i = 0;
    letters.forEach(letter => {

      if (this.currentWord.includes(letter) && i === this.currentWord.indexOf(letter)){
        returnArray.push(2);
      }
      else if (this.currentWord.includes(letter) && i != this.currentWord.indexOf(letter)){
        returnArray.push(1);
      }
      else{
        returnArray.push(0);
      }
      i++;
    })

    let score = returnArray.reduce((a,b) => a+b, 0);

    if (score == 10){
      this.Win();
    }
    else if (this.guesses.length >= 6){
      this.Lose();
    }

    this.addWordleObject(new wordleObject(letters, returnArray));
    console.log(this.wordleObjects);

    return returnArray;
  }

  Win(){
    console.log("You Win!");
  }

  Lose(){
    console.log("You Lose!");
  }
}
