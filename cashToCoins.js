//console.log("testing");

const dollarAmount = .10;
const piggyBank = {};

var penny = dollarAmount * 100;
var pennyAmount = Math.floor(penny);
//console.log(pennyAmount);

let quarter = pennyAmount / 25;
piggyBank.quarters = Math.floor(quarter);
//console.log(piggyBank.quarters);
    
let dime = (pennyAmount % 25) / 10;
piggyBank.dimes = Math.floor(dime);
//console.log(piggyBank.dimes);

let nickle = ((pennyAmount % 25) % 10) / 5;
piggyBank.nickles = Math.floor(nickle);

let pennies = (((pennyAmount % 25) % 10) % 5) / 1;
piggyBank.pennies = Math.floor(pennies);


console.log(piggyBank)