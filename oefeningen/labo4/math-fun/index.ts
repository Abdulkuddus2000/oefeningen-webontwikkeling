let add = (a: number, b: number): number => a + b;
let substract = (a: number, b: number): number => a - b;
let multiply = (a: number, b: number=1): number => a * b;
let devide = (a: number, b: number=1): number => a / b;

let result: number = devide(multiply((add(4, 5)), (substract(6, 3))), 2);

console.log(`(4 + 5) * (6 - 3) / 2 = ${result}`);

export {}