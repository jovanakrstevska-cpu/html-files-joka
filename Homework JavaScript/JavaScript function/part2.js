let humanYears = prompt("Enter the dog's age in human years:");

humanYears = Number(humanYears);

function convertToDogYears(humanYears) {
    const dogYear = 7; 
    return humanYears * dogYear;
}

let dogYears = convertToDogYears(humanYears);

alert("The dog's age in dog years is: " + dogYears);

console.log("The dog's age in dog years is: " + dogYears);
