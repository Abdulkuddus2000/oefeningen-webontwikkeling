interface TestFunction {
    (n: number): boolean;
}

let isOdd: TestFunction = (a: number)=> a % 2 !== 0
let isEven: TestFunction = (a: number)=> a % 2 === 0
let isGreaterThan10: TestFunction = (a: number) => a > 10;
let isMultipleOf3 : TestFunction = (a: number) => a % 3 === 0;

let atLeastTwo = (numbers: number[], fun: TestFunction): boolean => {
    let count = 0;
    for (const num of numbers) {
        if (fun(num)) {
            count++;
            if (count >= 2) return true;
        }
    }
    return false;
}

console.log(atLeastTwo([2, 3, 4, 6, 8], isOdd)); // false
console.log(atLeastTwo([2, 3, 4, 5, 6, 8], isOdd)); // true

export {}