// name from email
import { cwd } from 'process';
import rl from 'readline-sync';

// let email: string = "andie.similon@ap.be";

let resume: boolean = true

do{
    let email: string = rl.questionEMail("Geef het email adres in: ", {limitMessage: "Geef een geldig email adres in: "});
    let indexOfEmailToken: number = email.indexOf('@');

    let name: string = (email.slice(0, indexOfEmailToken));
    
    let indexOfDotToken: number = name.indexOf(".");
    
    // let firstName: string = name.slice(0, indexOfDotToken);
    // let shortFirstName: string = firstName[0];
    
    let shortFirstName: string = ((name.slice(0, indexOfDotToken)))[0];
    
    let lastname: string = name.slice(indexOfDotToken+1, indexOfEmailToken)
    
    console.log("De naam is " +shortFirstName.toUpperCase() + ". " + lastname[0].toUpperCase() + lastname.slice(1))
    resume = rl.keyInYNStrict("Wil je nog een email adres ingeven? ");
}while(resume === true);
console.log("Nog een goede dag!");



