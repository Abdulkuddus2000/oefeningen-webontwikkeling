// import rl from 'readline-sync';
// let amount: number = rl.questionFloat("Geef het bedrag: ", {limitMessage: "Geef een (decimaal-) getal!"});
// let interestRate: number = rl.questionFloat("Geef het interest voet: ", {limitMessage: "Geef een (decimaal-) getal"})

import { parse } from "path";

let amount: number = 1000;
let interestRate: number = 5;


// bedrag berekenen over een paar jaar:
let total: number;

// over 1 jaar
total = amount * Math.pow(1+(interestRate / 100), 1);
console.log(`Na 1 jaar heb je ${parseFloat(total.toFixed(2))}`)

total = 0;

// over 2 jaar
total = amount * Math.pow(1+(interestRate / 100), 2);
console.log(`Na 2 jaar heb je ${parseFloat(total.toFixed(2))}`)
total = 0;

// over 5 jaar
total = amount * Math.pow(1+(interestRate / 100), 5);
console.log(`Na 5 jaar heb je ${parseFloat(total.toFixed(2))}`)
parseFloat(total.toFixed(2))
total = 0;

