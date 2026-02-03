// oefening uren en minuten
import rl from 'readline-sync';

let minutes: number = rl.questionInt("Geef het aantal minuten in: ", {limitMessage: "Geef mij een geheel getal"});

let hours: number = Math.floor(minutes / 60);
minutes %= 60;

console.log(`Dit is ${hours} uur en ${minutes} minuten`);
