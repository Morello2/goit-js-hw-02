"use strickt";

function makeTransaction(quantity, pricePerDroid, customerCredits) {
  if (quantity * pricePerDroid <= customerCredits) {
    return `Total is ${quantity * pricePerDroid}`;
  } else {
    return "Insufficient funds!";
  }
}

console.log(makeTransaction(5, 100, 1000));
console.log(makeTransaction(9, 250, 2000));
console.log(makeTransaction(2, 500, 1000));
console.log(makeTransaction(4, 350, 10000));
console.log(makeTransaction(7, 100, 600));
