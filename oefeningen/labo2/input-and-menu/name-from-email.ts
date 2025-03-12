// name from email
import rl from 'readline-sync'

// let email: string = rl.questionEMail("Geef het email adres in: ", {limitMessage: "Geef een geldig email adres in: "});
let email: string = "andie.similon@ap.be";
let indexOfEmailToken: number = email.indexOf('@');

let name: string = email.slice(0, indexOfEmailToken);
let indexOfDotToken: number = name.indexOf(".");

let firstName: string = name.slice(0, indexOfDotToken);
let shortFirstName: string = firstName.slice(-1, )

let lastname: string = name.slice(indexOfDotToken+1, indexOfEmailToken)

// console.log(firstName + " " + lastname)
console.log(shortFirstName + " " + lastname)

// let lastname: string = name

