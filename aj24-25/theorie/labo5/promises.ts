import { reject, result } from "lodash";
import { resolve } from "path";


// aanmaken van een promise
const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        resolve(2 * 2);
    }, 1000);
});


promise.then((result: number) => {
   console.log(result); 
});


// promise als return type
function multiply(n1: number, n2: number): Promise<number>{
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(n1 * n2);
        }, 1000);
    })
}