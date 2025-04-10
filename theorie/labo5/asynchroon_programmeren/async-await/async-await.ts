import { result } from "lodash";

// //////////////////////////////////////// Asynch/Await
function multiply(n1: number, n2: number): Promise<number>{
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(n1 * n2);
        }, 1000);
    });
}

// Stel je voor dat we eerst de getallen 2 en 2 willen vermenigvuldigen en 
// daarna het resultaat willen vermenigvuldigen met 5. We kunnen dit doen 
// met de then functie:
multiply(2, 2).then((result) => { // eerst dit
    multiply(result, 5).then((result) => { // dan dit
        multiply(result, 10).then((result) => { // daarna dit
            console.log(result);
        });
    });
});

// begint heel onleesbaar te worden = callback hell
// oplossing: async/await

let result: number = await multiply(2, 2);
result = await multiply(result, 5);
result = await multiply(result, 10);
console.log(result);
