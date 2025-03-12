import readline from 'readline-sync';

// let name: string = readline.question("What's your name? ");
// console.log(`Hello ${name}`);

// // getal lezen
// let age: number = Number(readline.question("What's your age? "));
// console.log(`You are ${age} years old`);


// let age2: number | undefined = undefined; // variabele heeft momenteel geen waarde, initialisatie van de variabele
// do{
//     age2 = Number(readline.question("What's your age? "));
//     if(isNan(age2)){
//         console.log("Input a valid number, please.");
//     }
// } while(isNan(age2));
// console.log(`You are ${age2} years old.`);

// questionInt()-methode om de input automatisch om te zetten naar een getal
// let age3: number = readline.questionInt("What's your age? ");
// console.log(`You are ${age3} years old.`);

// error messages aanpassen:
// let age4: number = readline.questionInt("What's your age? ", {limitMessage: "I only like numbers!"});
// console.log(`You are ${age4} years old.`);

// een float number inlezen
// let price: number = readline.questionFloat("What's the price? ");
// console.log(`Thr price is ${price} euro.`);

// boolean inlezen
// let answer: boolean = readline.keyInYNStrict("Do you like TypeScript?");

// if(answer){
//     console.log("Me too!");
// }else{
//     console.log("Too bad!");
// }

// show a menu

// let choices : string[] = ["TypeScript", "JavaScript", "Python", "Java", "C#"];

// let index: number = readline.keyInSelect(choices, "What's your favorite programming language? ");
// console.log(`You chose ${choices[index]}.`);

export{};