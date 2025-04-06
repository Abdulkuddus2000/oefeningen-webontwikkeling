// import { Address } from "cluster";
import { userInfo } from "os";


// interface

// interface Address{
//     street: string;
//     number: number;
//     city: string;
// }

// interface User{
//     name: string;
//     age?: number; // optioneel
//     address: Address;
// }

// let user: User = {
//     name: "Andie",
//     age: 40,
//     address: {
//         street: "Fakestreet",
//         number: 133,
//         city: "Fakegem"
//     }
// }

// let user2: User = {
//     name: "Debbie",
//     age: 30,
//     address: {
//         street: "Fakestraat",
//         number: 144,
//         city: "Fakegem2"
//     }
// }

// console.log(user.address.street);

// leeftijd is optioneel, dus checken of deze ingevuld is:
// if (user.age) {
//     console.log(user.age);
// }

// Record type
/* 
een object met onbekende properties
2 types parameters:
    * type van de keys
   * type van de values
*/

// interface PhoneBook {
//     "Andie": string,
//     "Debbie": string,
//     "Charlie": string
// }

// const phoneBook: PhoneBook = {
//     "Andie": "+32 123 45 67 89",
//     "Debbie": "+32 987 65 43 21"
// }

// object toevoegen aan een phonebook
// dit werkt niet, je moet de interface daarvoor aanpassen
// phoneBook["Charlie"] = "+32 123 45 67 89";

// niet handig als je op voorhand niet weet welke namen er gaan komen in phonebook
// oplossing ==> Record type:
let phoneBook2: Record<string, string> = {
    "Andie": "+32 123 45 67 89",
    "Debbie": "+32 987 65 43 21"
}

/**
 * Occurences tellen
Stel dat we een object willen gebruiken om bij te houden hoeveel keer een 
bepaalde waarde voorkomt in een array. We kunnen onmogelijk op voorhand weten 
welke waarden er in de array zullen zitten dus we kunnen niet op voorhand 
zeggen welke properties het object zal hebben. We kunnen dit oplossen 
aan de hand van de Record type:
 */

// let count: Record<string, number> = {};

// let values = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

// for (const value of values) {
//     if (count[value]) {
//         count[value]++;
//     } else {
//         count[value] = 1;
//     }
// }

// console.log(count); // { '1': 3, '2': 3, '3': 3, '4': 3, '5': 3 }


// JSON bestand inlezen
// import data from "./users.json";

// const users: User[] = data; // inhoud van de json file bewaren

// optioneel chaining met .? operator

interface User {
    name: string,
    age: number,
    address?: Address;
}

interface Address{
    street: string;
    number: number;
    city: string;
}

let user: User = {
    name: "Andie",
    age: 30
}



// console.log(user.address?.street?.toString());

// de non-null assertion operation (!-operation)

/*
In TypeScript wordt de ! (non-null assertion) operator gebruikt om 
aan te geven dat een waarde zeker niet null of undefined zal zijn op 
het punt waar de operator wordt gebruikt, zelfs als de typechecker dat 
niet kan garanderen. Dit kan handig zijn in situaties waar je meer weet 
over de waarde dan TypeScript kan afleiden.
*/

// functie aanmaken:
function getDefaultUser(): User {
    return {
        name: "Default",
        age: 0,
        address: {
            street: "Defaultstreet",
            number: 0,
            city: "Defaultcity"
        }
    }
}


let defaultUser = getDefaultUser();
// console.log(defaultUser.address.street); // / Error: Object is possibly 'undefined'

console.log(defaultUser.address!.street);


export {}