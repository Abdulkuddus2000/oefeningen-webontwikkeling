// Arrays

// let numbers: number[] = [];
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["Banana", "Apple", "Orange"];

console.log(fruits[0]); // Banana
console.log(fruits[1]); // Appe
console.log(fruits[2]); // Orange

console.log("4e element: " + fruits[3]);

fruits[2] = "Pear"; // element vervangen, wijzigen
fruits[3] = "Kiwi"; // element toevoegen
console.log("number of elements in array: " + fruits.length);

console.log("All elements: " + fruits); // elementen naast elkaar weergeven

console.log("All elements: "); // elementen onder elkaar weergeven


console.log("for met iterator:");
for (let i = 0; i < fruits.length; i++) { // type interference: je hoeft niet meer te zeggen welke type i heeft
    console.log(fruits[i]);
}

// for of loop

console.log("for-of loop");
for (let fruit of fruits) {
    console.log(fruit);
}

// multidimensionale arrays
console.log("multidimensionale arrays:");
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][0]); // eerste rij, eerste kolom

// itereren met een loop:
let starterPokemon : string[][] = [
    ["Bulbasaur","Charmander","Squirtle"],
    ["Chikorita","Cyndaquil","Totodile"],
    ["Treecko","Torchic","Mudkip"]
];

for (let i = 0; i < starterPokemon.length; i++) {
    console.log(`Generation ${i + 1}:`);
    for (let j = 0; j < starterPokemon[i].length; j++) {
        console.log(starterPokemon[i][j]);        
    }
}

// tuples - array waar je een vast aantal elementen kan aan toevoegen waarvan het type bekend is
console.log("tuples:");

const coordinate: [number, number] = [50, 3];

console.log(coordinate[0]);
console.log(coordinate[1]);

let country: [string, number, number] = [
    "Rotterdam", 51.926517, 4.462456
];

// arrays van tuples
console.log("Arrays van tuples:");
let countries : [string, number, number][] = [
    ["Rotterdam", 51.926517, 4.462456],
    ["Amsterdam", 52.374021, 4.88969],
    ["Utrecht", 52.0908, 5.1214],
    ["Antwerpen", 51.227741, 4.402465],
    ["Brussel", 50.85467, 4.351697],
    ["Gent", 51.05, 3.7167]
];

for (let country of countries) {
    console.log(`${country[0]} ${country[1]} ${country[2]}`);
}

export {}