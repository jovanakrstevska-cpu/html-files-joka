let phonePrice = 119.95;
let numberOfPhones = 30;
const taxRate = 0.05;

let sum = phonePrice * numberOfPhones;
let tax = sum * taxRate;
let totalPrice = sum + tax;

console.log("Sum: $" + sum);
console.log("Tax: $" + tax);
console.log("Total Price: $" + totalPrice);