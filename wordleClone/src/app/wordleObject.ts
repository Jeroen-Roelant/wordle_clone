export class wordleObject{
    constructor(
        letters: Array<string>,
        colors: Array<number>
    ){
        this.letters = letters
        this.colors = colors
    }

    letters: Array<string>;
    colors: Array<number>; 
}