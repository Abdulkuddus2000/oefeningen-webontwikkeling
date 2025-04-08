const numsArray: number[] = [1, 2, 3, 4, 5];

let sum = (numbers: number[]): number => {
    return numbers.reduce((acc: number, el: number) => acc + el);
}

console.log("Som van de array: " + sum(numsArray));

