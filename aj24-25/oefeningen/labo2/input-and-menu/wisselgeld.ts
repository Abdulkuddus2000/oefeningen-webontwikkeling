import rl from 'readline-sync';

let amount: number = rl.questionInt("Geef het bedrag in: ");

let amounts: number[] = [];

let fivehundred : number = Math.floor(amount / 500);
amount -= fivehundred * 500;
amounts[0] = fivehundred;

let twohundred : number = Math.floor(amount / 200);
amount -= twohundred * 200;
amounts[1] = twohundred;

let hundred: number = Math.floor(amount / 100);
amount -= hundred * 100;
amounts[2] = hundred;

let fifty: number = Math.floor(amount / 50);
amount -= fifty * 50;
amounts[3] = fifty;

let twenty : number = Math.floor(amount / 20);
amount -= twenty * 20;
amounts[4] = twenty;

let ten : number = Math.floor(amount / 10);
amount -= ten * 10;
amounts[5] = ten;

let five: number = Math.floor(amount / 5);
amount -= five * 5;
amounts[6] = five;

let two : number = Math.floor(amount / 2);
amount -= two * 2;
amounts[7] = two;

let one : number = Math.floor(amount / 1);
amount -= one * 1;
amounts[8] = one;

console.log(`Dit is een ${amounts[0]} briefjes van 500, ${amounts[1]} briefjes van 200, ${amounts[2]} briefjes van 100, ${amounts[3]} briefjes van 50, ${amounts[4]} briefjes van 20, ${amounts[5]} briefjes van 10, ${amounts[6]} briefjes van 5, ${amounts[7]} muntjes van 2, ${amounts[8]} muntjes van 1`);
