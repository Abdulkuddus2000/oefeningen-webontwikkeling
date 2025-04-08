const numbers: number[] = [-4, -4, 1, 2, 3, 4, 5];

// Deel 1
let filterPositive = (numbersArray: number[]): number[] => {
    let newArray: number[] = [];
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] > 0) {
            newArray.push(numbersArray[i]);
        }
    }
    return newArray;
}

console.log(filterPositive(numbers)); // 1,2,3,4,5

// Deel 2
let filterNegative = (numbersArray: number[]): number[] => {
    let newArray: number[] = [];
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] < 0) {
            newArray.push(numbersArray[i]);
        }
    }
    return newArray;
}


console.log(filterNegative(numbers)); // 1,2,3,4,5

// Deel 3

let filterEven = (numbersArray: number[]): number[] => {
    let newArray: number[] = [];
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] % 2 === 0) {
            newArray.push(numbersArray[i]);
        }
    }
    return newArray;
}


console.log(filterEven(numbers));


// Deel 4

const filter = (numsArray: number[], myFunction: (n: number) => boolean): number[] => {
    let result: number[] = [];

    for (let i = 0; i < numsArray.length; i++) {
        if (myFunction(numbers[i])) {
            result.push(numbers[i]);
        }
    }
    return result;
}

const isPositive = (number: number) => number >= 0;
console.log(filter(numbers, isPositive)); // 1,2,3,4,5

export {}