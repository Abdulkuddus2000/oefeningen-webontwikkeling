import * as rl from 'readline-sync';

// string inlezen
// let name = rl.question("Whats your name? ");
// console.log(`Hello ${name}!`);

// getal inlezen
// let age: number = Number(rl.question("What's your age? "));
// console.log(`You are ${age} years old`);

// controle of invoer een getal is:
// let age: number | undefined = undefined;

// do {
//     // age = Number(rl.question("What's your age? "));
//     age = Number(rl.questionInt("Whats your name? ")); // zet input automatisch om naar int waarde
//     if (isNaN(age)) {
//         console.log("input valid number, please.");
//     }
// } while (isNaN(age))

// console.log(`You are ${age} years old.`);

// controle op int input met questionInt, veel korter
// let age: number = rl.questionInt("What's your age? ");
// console.log(`You are ${age} years old.`);

// error message aanpassen:
// let age: number = rl.questionInt("What's your name? ", { limitMessage: "I only like numbers!" });
// console.log(`You are ${age} years old.`);

// questionFloat voor kommagetal
// let price: number = rl.questionFloat("What's the price? ");
// console.log(`The price is ${price} euro.`);

// boolean lezen
// let answer: boolean = rl.keyInYNStrict("Do you like TypeScript? ");

// if (answer) {
//     console.log("Me too!!");
// }
// else {
//     console.log("Too bad!!");
// }

// menu tonen
// let choices: string[] = ["TypeScript", "JavaScript", "Python", "Java", "C#"];

// let index: number = rl.keyInSelect(choices, "What's your favorite programming language?");
// console.log(`You chose ${choices[index]}`);