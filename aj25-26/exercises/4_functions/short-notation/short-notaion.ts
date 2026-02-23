let printStuff = (amount: number, text: string): void =>
  console.log(`Hello ${text}, you are number ${amount}`);

let twoDArray = (el1: string, el2: string): string[] => [el1, el2];

let numberToString = (number: number): string => `${number}`;

console.log(printStuff(7, " Heavens"));
console.log(twoDArray("Good", "students"));
console.log(numberToString(5));
