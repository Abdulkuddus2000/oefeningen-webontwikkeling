// Array Methodes
// map() --> nieuwe array waarbij elk element van de originele array is vervangen door het resultaat van de callback functie
let numbers : number[] = [1,2,3,4,5];
let doubled : number[] = numbers.map(element => element * 2);
console.log(doubled); // [2,4,6,8,10]

// het type expliciet aangeven:
let doubled2 : number[] = numbers.map((element: number) => element * 2);


// filter

let numbers2 : number[] = [1,2,3,4,5];
let even : number[] = numbers2.filter(element => element % 2 === 0);
console.log(even); // [2,4]

// het type expliciet aangeven:
let even2: number[] = numbers2.filter((element: number) => element % 2 === 0);


// reduce
let numbers3 : number[] = [1,2,3,4,5];
let sum : number = numbers3.reduce((accumulator, element) => accumulator + element);
console.log(sum); // 15

// type die de callback functie teruggeeft is hetzelfde als het type van de accumulator
// je kan die ook expliciet aangeven:
let sum2: number = numbers.reduce((accumulator: number, element: number) => accumulator + element);

/**
Het type van de accumulator is hetzelfde als het type van de initiele waarde die je meegeeft aan de reduce methode. 
Als je geen initiele waarde meegeeft, dan zal de accumulator hetzelfde type hebben als het eerste element van de array.
Soms is het zelfs nodig om het type van de accumulator expliciet aan te geven omdat het type niet kan worden afgeleid.
 */

let numbers4 : number[] = [1,2,3,4,5];
console.log(numbers4.reduce((prev: number[], current: number) => [current, ...prev], []));

// Daarom is het altijd een goed idee om de types van de parameters van de callback functie expliciet aan te geven in een reduce methode.

// find
// geeft het eerste element van de array terug waarvoor de callback functie true geeft
let numbers5 : number[] = [1,2,3,4,5];
let firstEven : number | undefined = numbers5.find(element => element % 2 === 0);
console.log(firstEven); // 2

/**
Het type van firstEven is number | undefined. 
Dit komt omdat de find methode undefined zal teruggeven als er geen element is gevonden 
waarvoor de callback functie true teruggeeft. Zelfs als je zeker weet dat er altijd 
een element zal zijn dat voldoet aan de voorwaarde, moet je nog steeds undefined in 
overweging nemen.
 
 */


let names: string[] = ["Andie", "Bert", "Cedric"];
let firstD: string | undefined = names.find(name => name.startsWith("D"));
console.log(firstD); // geeft undefined terug

