// oefening 1 - som van getallen

import * as rl from 'readline-sync';

// oefening 1 - som van getallen

// const amount: number = rl.questionInt("Hoeveel getallen wil je optellen? ");
// let myArray: number[] = new Array(amount);
// let myArray: number[] = []; // best practice 

// for (let i = 0; i < amount; i++) {
//     myArray[i] = rl.questionInt(`Geef getal ${i + 1} in: `);
// }

// let sum: number = 0;

// for (let i = 0; i < myArray.length; i++) {
//     sum += myArray[i];
// }


// met de array-methode:
// const result = amount.reduce((accumulator, currentNUmber) => {
//     return (accumulator += currentNUmber);
// });

// console.log(sum);

// oefening 2 - puntenboek
// let counter: number = 1; // start met 1
// let counter_low_grades: number = 0;
// let gradeBook: number[] = []; // start leeg
// let input: string;

// while (true) {
//     input = rl.question(`Geef het punt van student ${counter} in: `);
//     if (input.trim() != "") {
//         gradeBook.push(Number(input));
//         counter++;
//         if (Number(input) < 10) {
//             counter_low_grades++;
//         }
//         continue;
//     } else {
//         let sum = 0;
//         let average: number = 0;
//         for (let i = 0; i < gradeBook.length; i++) {
//             sum += gradeBook[i];
//         }

//         average = sum / gradeBook.length;
//         console.log(`average: ${average}, number of low graders: ${counter_low_grades}`);
//         break;
//     }
// }

// oefening 3 - Rot13
// let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// let input: string = rl.question("Gimme some txt bro: ");
// let newIndex: number;
// let newWord: string[] = new Array(input);

// for (let i = 0; i < input.length; i++) { // itereer over het ingegeven woord
//     // console.log(input[i]);
//     // search in the alphabet
//     for (let j = 0; j < alphabet.length; j++) { // itereer over het alfabet
//         if (input[i] == alphabet[j]) { // als letter van ingegeven woord overeenkomt met het huidige letter van het alfabet
//             newIndex = (alphabet.indexOf(alphabet[j].toLowerCase()) + 13) % 26;
//             newWord[j] += alphabet[newIndex];
//         }
//     }
// }

// console.log(newWord);

// let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// let input: string = rl.question("Enter a string: ");
// let result: string = "";

// for (let i = 0; i < input.length; i++) {
//     let char = input[i].toLocaleLowerCase();
    
//     let index = alphabet.indexOf(char);

//     if (index != -1) {
//         let newIndex = (index + 13) % 26;
//         result += alphabet[newIndex];
//     } else {
//         result += input[i];
//     }
// }

// console.log(result);

// oefening 4 - Pokemon Team
// let pokemons: string[] = [
//     "Bulbasaur",
//     "Ivysaur",
//     "Venusaur",
//     "Charmander",
//     "Charmeleon",
//     "Charizard",
//     "Squirtle",
//     "Wartortle",
//     "Blastoise",
//     "Caterpie",
//     "Metapod",
//     "Butterfree",
//     "Weedle",
//     "Kakuna",
//     "Beedrill",
//     "Pidgey",
//     "Pidgeotto",
//     "Pidgeot",
//     "Rattata",
//     "Raticate",
//     "Spearow",
// ];

// // overzicht tonen van alle pokemons
// for (let i = 0; i < pokemons.length; i++) {
//     console.log(`${i}. ${pokemons[i]}`);
// }

// let team: string[] = [];
// let input: string = "";
// let choice: number;
// let correctInput: boolean = true;

// do {
//     input = rl.question("Welke pokemon wil je in je team? [0-20]: ");
    
//     // check op getal of STOP
//     if (input.toLowerCase().trim() == "stop") {
//         correctInput = false;
//         break;
//     }

//     // input is een getal
//     else {
//         choice = parseInt(input); // input casten naar een Number

//         // check of het een geldig nummer is
//         if (isNaN(choice) || choice < 0 || choice >= pokemons.length) {
//             console.log("Geef een geldig nummer tussen 0 en 20.");
//             continue; // spring terug naar het begin van de loop zonder nog verder te gaan vanaf dit punt
//         }
//         const selectedPokemon = pokemons[choice];

//         // check op dubbele
//         if (team.includes(selectedPokemon)) {
//             console.log("Deze pokemon zit al in je team");
//         } else {
//             team.push(selectedPokemon);
//             console.log(`${selectedPokemon} toegevoegd aan je team.`);
//         }
//     }

// } while (correctInput);

// console.log("Hier een overzicht van jouw pokemon team");
// for (let i = 0; i < team.length; i++) {
//     console.log(`${i+1}. ${team[i]}`);
// }


// oefening 5 - Todo List String



