import { Injectable, EventEmitter } from '@angular/core';
import { wordleObject } from './wordleObject';

@Injectable({
  providedIn: 'root'
})

export class GameServiceService {

  constructor() { 
    this.currentWord = this.getWord();
    
  }

  finished: boolean = false;
  state: string = "playing";

  //#region words
  words: string[] = ["which","there","their","about","would","these","other","words","could","write","first","water","after","where","right","think","three","years","place","sound","great","again","still","every","small","found","those","never","under","might","while","house","world","below","asked","going","large","until","along","shall","being","often","earth","began","since","study","night","light","above","paper","parts","young","story","point","times","heard","whole","white","given","means","music","miles","thing","today","later","using","money","lines","order","group","among","learn","known","space","table","early","trees","short","hands","state","black","shown","stood","front","voice","kinds","makes","comes","close","power","lived","vowel","taken","built","heart","ready","quite","class","bring","round","horse","shows","piece","green","stand","birds","start","river","tried","least","field","whose","girls","leave","added","color","third","hours","moved","plant","doing","names","forms","heavy","ideas","cried","check","floor","begin","woman","alone","plane","spell","watch","carry","wrote","clear","named","books","child","glass","human","takes","party","build","seems","blood","sides","seven","mouth","solve","north","value","death","maybe","happy","tells","gives","looks","shape","lives","steps","areas","sense","speak","force","ocean","speed","women","metal","south","grass","scale","cells","lower","sleep","wrong","pages","ships","needs","rocks","eight","major","level","total","ahead","reach","stars","store","sight","terms","catch","works","board","cover","songs","equal","stone","waves","guess","dance","spoke","break","cause","radio","weeks","lands","basic","liked","trade","fresh","final","fight","meant","drive","spent","local","waxes","knows","train","bread","homes","teeth","coast","thick","brown","clean","quiet","sugar","facts","steel","forth","rules","notes","units","peace","month","verbs","seeds","helps","sharp","visit","woods","chief","walls","cross","wings","grown","cases","foods","crops","fruit","stick","wants","stage","sheep","nouns","plain","drink","bones","apart","turns","moves","touch","angle","based","range","marks","tired","older","farms","spend","shoes","goods","chair","twice","cents","empty","alike","style","broke","pairs","count","enjoy","score","shore","roots","paint","heads","shook","serve","angry","crowd","wheel","quick","dress","share","alive","noise","solid","cloth","signs","hills","types","drawn","worth","truck","piano","upper","loved","usual","faces","drove","cabin","boats","towns","proud","court","model","prime","fifty","plans","yards","prove","tools","price","sheet","smell","boxes","raise","match","truth","roads","threw","enemy","lunch","chart","scene","graph","doubt","guide","winds","block","grain","smoke","mixed","games","wagon","sweet","topic","extra","plate","title","knife","fence","falls","cloud","wheat","plays","enter","broad","steam","atoms","press","lying","basis","clock","taste","grows","thank","storm","agree","brain","track","smile","funny","beach","stock","hurry","saved","sorry","giant","trail","offer","ought","rough","daily","avoid","keeps","throw","allow","cream","laugh","edges","teach","frame","bells","dream","magic","occur","ended","chord","FALSE","skill","holes","dozen","brave","apple","climb","outer","pitch","ruler","holds","fixed","costs","calls","blank","staff","labor","eaten","youth","tones","honor","globe","gases","doors","poles","loose","apply","tears","exact","brush","chest","layer","whale","minor","faith","tests","judge","items","worry","waste","hoped","strip","begun","aside","lakes","bound","depth","candy","event","worse","aware","shell","rooms","ranch","image","snake","aloud","dried","likes","motor","pound","knees","refer","fully","chain","shirt","flour","drops","spite","orbit","banks","shoot","curve","tribe","tight","blind","slept","shade","claim","flies","theme","queen","fifth","union","hence","straw","entry","issue","birth","feels","anger","brief","rhyme","glory","guard","flows","flesh","owned"];

  getWord():string{
    let word = this.words[Math.floor(Math.random()*this.words.length)].toUpperCase();
    console.log("helaba hier niet kijken, dit is enkel maar voor mij als ik test!! het woord is " + word);
    return word;
  }

  currentWord: string = "";

  //#endregion

  guesses: string[] = [];


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
    this.finished = true;
    this.state = "win";
  }

  Lose(){
    console.log("You Lose! The word was " + this.currentWord);
    this.finished = true;
    this.state = "lose";
  }
}

