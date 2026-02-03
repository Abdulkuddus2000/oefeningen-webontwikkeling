interface Recept {
    name: string,
    description: string,
    people: number,
    ingredients: Ingredient[]
}

interface Ingredient {
    name: string,
    amount: string, // bv.: "1 stuk"
    price: number
}

let lasagne: Recept = {
    name: "Lasagne",
    description: "Lekkere lasagne",
    people: 4,
    ingredients: [
        {
            name: "lasagnevellen",
            amount: "1 pak",
            price: 5.50
        },
        {
            name: "ui",
            amount: "1 stuk",
            price: 0.3
        },
        {
            name: "look",
            amount: "1 teentje",
            price: 0.5
        }
    ]
};

console.log("Recept: " +lasagne.name);
console.log("Beschrijving: " +lasagne.description);
console.log("Personen: " +lasagne.people);
console.log("Ingredienten: ");
for (const element of lasagne.ingredients) {
    console.log("- " +element.amount +" " +element.name);
}

let total: number = lasagne.ingredients.reduce((sum, ingredient) => sum+ingredient.price, 0);

console.log(`Totale kostprijs: ${total} euro.`);

export {}