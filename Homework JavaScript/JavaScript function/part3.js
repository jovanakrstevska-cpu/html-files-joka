// Hardcoded account balance
let accountBalance = 500; // You can change this value

// Function to withdraw money
function atmWithdraw(requestedAmount) {
    if (requestedAmount > accountBalance) {
        return "Not enough money";
    } else {
        accountBalance -= requestedAmount; // Subtract withdrawn money from balance
        return "You withdrew $" + requestedAmount + ". Money left: $" + accountBalance;
    }
}

// BONUS: Make it interactive with prompt()
let userInput = prompt("Enter the amount you want to withdraw:");
userInput = Number(userInput); // Convert string to number

// Call the function and show result
let result = atmWithdraw(userInput);
alert(result);
console.log(result);
