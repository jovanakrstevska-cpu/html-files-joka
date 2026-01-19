const numbers = [2, 4, 5, 8, 10];

const list = document.getElementById("numberList");

numbers.forEach(function(num) {
  const li = document.createElement("li");
  li.textContent = num;
  list.appendChild(li);
});

let sum = 0;
numbers.forEach(function(num) {
  sum += num;
});

document.getElementById("sumResult").textContent = "Sum of numbers: " + sum;

const equation = numbers.join(" + ") + " = " + sum;
document.getElementById("equationResult").textContent = "Equation: " + equation;