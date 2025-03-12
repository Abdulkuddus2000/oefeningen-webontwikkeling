// oefening op textbox
import rl from 'readline-sync'

let dash : string = '-';
let text: string;

do{
    text = rl.question("Geef een tekst in: ");
    
    console.log(`+${dash.repeat(text.length+2)}+`)
    console.log(`| ${text} |`);
    console.log(`+${dash.repeat(text.length)+2}+`)
}while(text);