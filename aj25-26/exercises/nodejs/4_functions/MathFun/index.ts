// function met functionkeyword
function add(a: number, b: number) {
  return a + b;
}

function substract(a: number, b: number) {
  return a - b;
}

function multiply(a: number, b: number = 1) {
  return a * b;
}

function divide(a: number, b: number = 1) {
  return a / b;
}

// arrow functions
let addArrow = (a: number, b: number) => {
  return 5 + 5;
};

let substractArrow = (a: number, b: number) => {
  return 5 - 5;
};

let multiplyArrow = (a: number, b: number = 1) => {
  return 5 * 5;
};

let divideArrow = (a: number, b: number = 1) => {
  return a / b;
};

let result: number = divide(multiply(add(4, 5), substract(6, 3)), 2);

console.log(result);

export {};