import { Injectable, EventEmitter } from '@angular/core';
import { wordleObject } from './wordleObject';

@Injectable({
  providedIn: 'root'
})

export class GameServiceService {

  constructor() { 
    this.currentWord = this.getWord();
  }

  words: string[] = ["APPLE","BEARS","CATCH","DOZER","EAGER","FAITH","GHOST","HUMOR","IVORY","JUMBO","KNOCK","LEMON","MAGIC","NIGHT","OASIS","PUNCH","QUICK","RAVEN","SALAD","TANGO","UNDER","VIVID","WHALE","XENON","YACHT","ZEBRA","ALERT","BRAVE","CHAOS","DREAM","ELITE","FLAME","GRACE","HEART","IMAGE","JAZZY","KINGS","LOVER","MUSIC","NIGHT","OCEAN","PANDA","QUEEN","RADIO","SUNNY","TIGER","UNITY","VIBES","WORLD","YOUTH","ZESTY","AMAZE","BLISS","CHEER","DELUX","EAGER","FANCY","GREAT","HAPPY","IDEAL","JOLLY","KINDS","LUCKY","MERRY"];

  getWord():string{
    let word = this.words[Math.floor(Math.random()*this.words.length)];
    console.log(word);
    return word;
  }

  guesses: string[] = [];

  currentWord: string = "";

  //#region wordleObject

  wordleObjects: wordleObject[] = [];
  wordleObjectsUpdated: EventEmitter<wordleObject[]> = new EventEmitter<wordleObject[]>();

  addWordleObject(wordleObject: wordleObject){
    this.wordleObjects.push(wordleObject);
    this.wordleObjectsUpdated.emit(this.wordleObjects);
  }

  getWordleObjects(){
    return this.wordleObjects;
  }

  //#endregion


  //#region guess
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
      if (this.currentWord.includes(letter) && this.getAllIndexes(this.currentWord.split(''), letter).includes(i)){
        returnArray.push(2);
      }
      else if (this.currentWord.includes(letter) && this.getAllIndexes(this.currentWord.split(''), letter)[0] != i){
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

    return returnArray;
  }

  //#endregion

  getAllIndexes(arr: string[], val: string) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
  }

  Win(){
    console.log("You Win!");
  }

  Lose(){
    console.log("You Lose!");
  }
}
