import { lookup as dnsLookup } from 'dns';
// import { readFile } from 'fs';
import { promisify } from 'util';

////////////// Aanmaken van een Promise:

// const promise = new Promise<number>((resolve, reject) => {
//     setTimeout(() => {
//         resolve(2*2);
//     }, 1000);
// });

// promise.then((result : number) => {
//     console.log(result);
// });

// // Promises als return type
// function multiply(number1: number, number2: number): Promise<number> {
//     return new Promise<number>((resolve, reject) => {
//         setTimeout(() => {
//             resolve(number1 * number2);
//         }, 1000);
//     });
// };

// const result = multiply(2, 2);
// console.log(result); 

// const result2 = multiply(2, 2);
// result.then((result) => {
//     console.log(result);
// });

// multiply(2, 2).then((result) => {
//     console.log(result);
// });

// // Catch
// function multiply2(number1: number, number2: number): Promise<number> {
//     return new Promise<number>((resolve, reject) => {
//         setTimeout(() => {
//             if (number1 * number2 > 10) {
//                 reject(new Error("Result is greater than 10"));
//             } else {
//                 resolve(number1 * number2);
//             }
//         }, 1000);
//     });
// };

// multiply2(4,10)
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error.message))


// // Promise.all
// Promise.all([multiply(2, 2), multiply(3, 3), multiply(4, 4)])
//     .then((results: number[]) => console.log(results))
//     .catch((error) => console.log(error.message));


//////////////////////////////// Built-in promises

// Filesystem
// const readFileAsync = promisify(readFile);
// readFileAsync("text.txt", "utf-8")
//   .then((result: string) => console.log(result))
//   .catch((err: any) => console.log(err.message));


// // DNS lookup

// const lookup = promisify(dnsLookup);

// lookup('ap.be')
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.error(err);
//   });


import { readFile } from "fs/promises";

readFile("text.txt", "utf-8")
    .then((result: string) => console.log(result))
    .catch((error) => console.log(error.message));

//     import { lookup } from 'dns/promises';

// lookup('ap.be')
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error));