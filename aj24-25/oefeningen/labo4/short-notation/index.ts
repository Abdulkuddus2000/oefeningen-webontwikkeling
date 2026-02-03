//Schrijf de volgende functies in de kortst mogelijke arrow notaties:

const printStuff = (amount: number, text: string): void => {
    console.log(`Hello ${text}, you are number ${amount}`);
}

//: void kan weggelaten worden
const printStuff2 = (amount: number, text: string) => console.log(`Hello ${text}, you are number ${amount}`);



const twoDArray = (element1: string, element2: string): string[] => {
    return [element1, element2];
}

// return kan weggelaten worden
const twoDArray2 = (element1: string, element2: string): string[] => [element1, element2];


const numberToString = (number: number): string => {
    return `${number}`;
}

const numberToString2 = (number: number): string => `${number}`;

// console.log(printStuff(2, "Abdul"));
// console.log(twoDArray("Kosimov", "Abdul"));
// console.log(numberToString(2));

console.log(printStuff2(2, "Abdul"));
console.log(twoDArray2("Kosimov", "Abdul"));
console.log(numberToString2(2));

export {}