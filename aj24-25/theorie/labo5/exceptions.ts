// Labo 5 - Exceptions
import readline from 'readline-sync';
// Throw
// function divide(a: number, b: number): number {
//     return a / b;
// }

// console.log(divide(5, 0)); // Output: Infinity


function divide2(a: number, b: number): number{
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

// Try catch
// try {
//     console.log(divide2(5, 0));
// } catch (error) {
//     console.log("Je kan niet delen door 0");
// }

// // een nuttigere voorbeeld:
// function devide(a: number, b: number): number{
//     if (b === 0) {
//         throw new Error("Division by zero is not allowed");
//     }
//     return a / b;
// }

// let result: number | undefined = undefined;

// while (result === undefined) {
//     let a = readline.questionInt("Geef een getal: ");
//     let b = readline.questionInt("Geef nog een getal: ");
//     try {
//         result = divide2(a, b);
//     } catch {
//         console.log("Je kan niet delen door 0");
//     }
// }

// console.log("Het resultaat is " +result);

// Finally
// try {
//     console.log(divide2(5, 0));
// } catch (error) {
//     console.log("Je kan niet delen door 0");
// } finally {
//     console.log("Dit print altijd");
// }

// Error object
try {
    console.log(divide2(5, 0));
} catch (error: any) { // any of unknown, omdat je niet weet welke type de foutmelding zal hebben
    if (error instanceof Error) {
        console.log(error.message);
        // je kna ook een string opgooien als foutmelding:
        throw "Division by zero is not allowed";
    }
}



export {}