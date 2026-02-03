import * as rl from 'readline-sync';

// oef. 1 - hello name
// let name: string = rl.question("Whats your name? ");
// console.log(`Hello ${name}`);


// oef 2 - bmi calculator
// bmi = gewicht / (lengte)^2

// let weight: number = rl.questionInt("Give your weight (kg): ");
// let length: number = rl.questionFloat("Give your length (meter): ");
// let bmi: number = weight / Math.pow(length, 2);

// console.log(`Your bmi is ${bmi.toFixed(2)}`); // afronden naar 2 decimalen



// oef 3 - bmi calculator multi
// let numberOfPeople: number = rl.questionInt("How man people do you want to insert: ");
// let counter: number = 0;
// do {
//     counter++;

//     let name: string = rl.question(`Give the name of person ${counter}: `)
//     let weight: number = rl.questionInt(`Give the weight of ${name} (kg): `);
//     let length: number = rl.questionFloat(`Give the length of ${name} (meter): `);
//     let bmi: number = weight / Math.pow(length, 2);

//     console.log(`${name} has a bmi of ${bmi.toFixed(2)}`);

// } while (counter < numberOfPeople);


// oefening 4 - interest calculator
// let value: number = rl.questionInt("Give the value: ");
// let interest_rate: number = rl.questionInt("Give the interest rate: ");

// let value: number = 1000;
// let interest_rate: number = 5;
// let years: number = 1;

/* 
totaal = bedrag * (1 + (interest / 100))^jaren
*/

// let total: number;

// do {
//     total = value * Math.pow(1 +(interest_rate / 100), years);
//     console.log(`After ${years} year, you'll have ${total.toFixed(2)}`);
//     years++;
// } while (years <= 5);

// oefening 5 - Uren en minuten
// let number_of_minutes: number = rl.questionInt("Give the number of minutes: ");
// let number_of_minutes: number = 150;

// let minutes: number = (number_of_minutes % 60);
// let hours: number = (number_of_minutes - minutes) / 60;

// console.log(`This is ${hours} houres and ${minutes} minutes`);

// oefening 6 - wisselgeld
// let value: number = rl.questionInt("Give the value: ");
let value: number = 123;
let briefjes_100: number = value % 100;
let briefjes_50: number = (value - briefjes_100) % 50;
let briefjes_20: number = (briefjes_100 - briefjes_50) % 20;
let briefjes_10: number = (briefjes_50 - briefjes_20) % 10;
let briefjes_5: number = (briefjes_20 - briefjes_10) % 5;
let muntjes_2: number = (briefjes_10 - briefjes_5) % 2;
let muntjes_1: number = (briefjes_5 - muntjes_2) % 1;

console.log(`briefje van 100: ${briefjes_100}`);
console.log(`briefje van 50: ${briefjes_50}`);
console.log(`briefje van 20: ${briefjes_20}`);
console.log(`briefje van 10: ${briefjes_10}`);
console.log(`briefje van 5: ${briefjes_5}`);
console.log(`muntje van 2: ${muntjes_2}`);
console.log(`muntje van 1: ${muntjes_1}`);

