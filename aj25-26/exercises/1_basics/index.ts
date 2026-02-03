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

// let amount: number = rl.questionInt("Geef het bedrag in: ");

// let amounts: number[] = [];

// let fivehundred : number = Math.floor(amount / 500);
// amount -= fivehundred * 500;
// amounts[0] = fivehundred;

// let twohundred : number = Math.floor(amount / 200);
// amount -= twohundred * 200;
// amounts[1] = twohundred;

// let hundred: number = Math.floor(amount / 100);
// amount -= hundred * 100;
// amounts[2] = hundred;

// let fifty: number = Math.floor(amount / 50);
// amount -= fifty * 50;
// amounts[3] = fifty;

// let twenty : number = Math.floor(amount / 20);
// amount -= twenty * 20;
// amounts[4] = twenty;

// let ten : number = Math.floor(amount / 10);
// amount -= ten * 10;
// amounts[5] = ten;

// let five: number = Math.floor(amount / 5);
// amount -= five * 5;
// amounts[6] = five;

// let two : number = Math.floor(amount / 2);
// amount -= two * 2;
// amounts[7] = two;

// let one : number = Math.floor(amount / 1);
// amount -= one * 1;
// amounts[8] = one;

// console.log(`Dit is een ${amounts[0]} briefjes van 500, ${amounts[1]} briefjes van 200, ${amounts[2]} briefjes van 100, ${amounts[3]} briefjes van 50, ${amounts[4]} briefjes van 20, ${amounts[5]} briefjes van 10, ${amounts[6]} briefjes van 5, ${amounts[7]} muntjes van 2, ${amounts[8]} muntjes van 1`);


// oefening 7 - name from email

let new_email_bool;
do {
    let email: string = rl.question("Whats your email: ");
    let new_email;

    let first_letter = email[0].toUpperCase() + ".";
    let dot_location = email.indexOf(".");
    let lastname = email.substring(dot_location+1, email.indexOf("@"));

    email = rl.question("Whats your email: ");
    first_letter = email[0].toUpperCase() + ".";
    dot_location = email.indexOf(".");
    lastname = email.substring(dot_location+1, email.indexOf("@"));

    console.log("De naam is " + first_letter + " " + lastname.substring(0, 1).toUpperCase() + lastname.substring(1));
    new_email = rl.keyInYN("Do you want to enter a new email adress? ")
    if (new_email === "y") {
        new_email_bool = true;
    } else {
        new_email_bool = false;
    }
} while (new_email_bool == true);
