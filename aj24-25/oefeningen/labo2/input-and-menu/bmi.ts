// oefening 2 - bmi
import rl from 'readline-sync';

// let weight: number = rl.questionInt("Geef je gewicht in (in kg): ");
// let length: number = rl.questionFloat("Geef je lengte in (in m): ");

// let bmi: number = weight / Math.pow(length, 2);

// console.log(`Je BMI is ${bmi.toFixed(2)}`);

// oefening 3 - BMI Calculator Multi

let numberOfPeople: number = rl.questionInt("Geef het aantal personen in: ");

let people: {name: string; weight: number; length: number }[] = [];

// gegevens verzamelen:
for(let i: number = 0; i < numberOfPeople; i++){
    let name: string = rl.question(`Geef de naam van persoon ${i + 1} in: `);
    let weight: number = rl.questionFloat(`Geef het gewicht van ${name} in (in kg: )`);
    let length: number = rl.questionFloat(`Geef de lengte van ${name} in (in m): `);

    people.push({name, weight, length});
}

people.forEach(person => {
    let bmi = person.weight / (person.length * person.length);
    console.log(`${person.name} heeft een bmi van ${bmi.toFixed(2)}`);
});
