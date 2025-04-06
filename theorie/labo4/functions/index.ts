// functions
function add(a: number, b: number): number{
    return a + b;
}

console.log(add(5, 100));

// functie die niets retourneerd, void mag je ook weglaten
function log(message: string): void{
    console.log(message);
}

log("Dit is een tekstje");


// functie met 1 of meerdere optionele parameters
function multiply(a: number, b?: number): number{
    // checken of b undefined is
    if (b === undefined) {
        return a;
    }
    return a * b;
}

multiply(5);

// een defaultwaarde meegeven aan een parameter:
function multiply2(a: number, b: number = 1): number {
    return a * b;
}

console.log(multiply2(5)); // 5
console.log(multiply2(5, 10)); // 50

// functie met onbepaald aantal parameters
function sum(...numbers: number[]): number{
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(1, 2, 3)); // 6

// arrow functions
let add2 = (a: number, b: number): number => {
    return a + b;
}

console.log(add2(1, 2)); // 3

let multiply3 = (a: number, b: number): number => {
    return a * b;
}

console.log(multiply3(2, 5)); // 10

// Callback functions = functie die als parameter word meegegeven aan een andere functie

console.log("Arrow functions: ");

let numbers = [1, 2, 3, 4, 5];

// arrow function zonder naam --> anonymous function
numbers.forEach((element) => {
    console.log(element);
});


// een array doorlopen + een callback functie uitvoeren per element
console.log("een array doorlopen + een callback functie uitvoeren per element:");

forEach(numbers, (element) => {
    console.log(element);
});

/**
 * bovenstaande callback parameter bevat nog altijd het any-type, dit willen we niet
 * we willen dat de callback functie een number verwacht als parameter
 * ==> declareer een callback parameter met het juist type
 * ==> maak een interface die de callback-functie juist beschrijft
 */

interface Callback{
    (element: number): void;
}

// nu: declareer de callback parameter met het type Callback
function forEach(array: number[], callback: Callback) {
    for (const element of array) {
        callback(element);
    }
}

let numbers2: string[] = ["een", "twee", "drie"];

forEach(numbers, (element) => {
    console.log(element);
}); // Error: Argument of type '(string: any) => void' is not assignable to parameter of type 'Callback'.

// nog een voorbeeld van een callback functie die een return type heeft en meer dan 1 parameter verwacht.
interface MathFunction {
    (a: number, b: number): number;
}

function calculate(a: number, b: number, callback: MathFunction): number {
    return calculate(a, b);
}

// nu: calculate functie gebruiken om een berekening uit te voeren met een callback functie,
// berkening zelf word bepaald door de callback functie zelf
let result = calculate(5, 10, (a, b) => {
    return a * b;
});

// Verkorte syntax:
let hello = () => { console.log("hello"); }

// nog korter:
let hello2 = () => console.log("hello2");

// keyword "return" mag zelfs weggelaten worden
interface MathFunction2{
    (a: number, b: number): number;
}

let add3: MathFunction2 = (a, b) => { return a + b };
let add4: MathFunction2 = (a, b) => a + b;

// als je maar 1 parameter hebt --> laat de haakjes rond de parameters weg
interface Calculation {
    (a: number): number;
};

let double1: Calculation = (a) => { return 2*a };
let double2: Calculation = (a) => 2*a;
let double3: Calculation = a => 2 * a;

// je kan de callback functie meegeven zonder de haakjes en accolades:

let numbers3 = [1, 2, 3, 4, 5];

numbers3.forEach(element => console.log(element));
forEach(numbers, element => { console.log(element); });

export {}