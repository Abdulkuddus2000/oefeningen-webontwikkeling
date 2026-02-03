import { error } from "console";
import { read, writeFile } from "fs";
import { readFile } from "fs/promises";
import { result } from "lodash";
import { parse } from "path";

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


// onderstaande code geeft een error
// let result: number = await multiply(2, 2);
// result = await multiply(result, 5);
// result = await multiply(result, 10);
// console.log(result);

//oplossing, plaats de code in een async functie:
async function main() {   
    let result: number = await multiply(2, 2);
    result = await multiply(result, 5);
    result = await multiply(result, 10);
    console.log(result);
}

// of plaats de cide in een IIFE (Immediately Invoked Function Expression)
(async () => {
    let result: number = await multiply(2, 2);
    result = await multiply(result, 5);
    result = await multiply(result, 10);
    console.log(result);
})();

// ook de catch functie kan je vervangen door een try catch blok
try {
    let result: number = await multiply(2, 2);
    result = await multiply(result, 5);
    result = await multiply(result, 10);
    console.log(result);
} catch (error) {
    console.log(error);
}

/*
Het is nu mogelijk om complexe logica te schrijven zonder dat je code totaal 
onleesbaar wordt. Stel je voor dat je twee getallen wil uitlezen uit een 
bestand getal1.txt en getal2.txt. Vervolgens wil je een vermenigvuldiging 
uitvoeren en het resultaat wegschrijven naar een bestand resultaat.txt.

Dit zou er met promises als volgt uitzien:
*/

readFile("getal1.txt", "utf-8").then((getal1) => {
    readFile("getal2.txt", "utf-8").then((getal2) => {
        multiply(parseInt(getal1), parseInt(getal2)).then((result) => {
            writeFile("resultaat.txt", result.toString(), "utf-8").then(() => {
                console.log("Done");
            });
        });
    });
});


async function main2() {
    try {
        const getal1 = await readFile("getal1.txt", "utf-8");
        const getal2 = await readFile("getal2.txt", "utf-8");
        const result = await multiply(parseInt(getal1), parseInt(getal2));
        await writeFile("resultaat.txt", result.toString(), "utf-8");
        console.log("Done");
    } catch (error){
        console.log(error);
    }
}


