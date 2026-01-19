function createTable(rows, cols) {
  const container = document.getElementById("tableContainer");

  container.innerHTML = "";

  const table = document.createElement("table");
  table.border = 1;
  table.style.borderCollapse = "collapse";
  table.style.textAlign = "center";

  for (let i = 1; i <= rows; i++) {
    const tr = document.createElement("tr");

    for (let j = 1; j <= cols; j++) {
      const td = document.createElement("td");
      td.textContent = `Row-${i} Column-${j}`;
      td.style.padding = "8px";
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }

  container.appendChild(table);
}

let numRows = prompt("Enter number of rows:");
let numCols = prompt("Enter number of columns:");

numRows = parseInt(numRows);
numCols = parseInt(numCols);

if (isNaN(numRows) || numRows <= 0 || isNaN(numCols) || numCols <= 0) {
  alert("Please enter valid numbers for rows and columns!");
} else {
  createTable(numRows, numCols);
}