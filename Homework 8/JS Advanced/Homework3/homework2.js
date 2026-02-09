const loadPlanetsBtn = document.getElementById("loadPlanets");
const planetsTableBody = document.getElementById("planetsTableBody");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// URLs for pagination
const page1URL = "https://swapi.py4e.com/api/planets/?page=1";
const page2URL = "https://swapi.py4e.com/api/planets/?page=2";

// Function to fetch planets
function fetchPlanets(apiUrl) {
    fetch(apiUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            printPlanets(data.results);
        })
        .catch(function(error) {
            console.log("Error fetching planets:", error);
        });
}

// Function to print planets in the table
function printPlanets(planets) {
    planetsTableBody.innerHTML = "";

    for (let i = 0; i < planets.length; i++) {
        const planet = planets[i];

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${planet.name || "Unknown"}</td>
            <td>${planet.population || "Unknown"}</td>
            <td>${planet.climate || "Unknown"}</td>
            <td>${planet.gravity || "Unknown"}</td>
        `;
        planetsTableBody.appendChild(row);
    }
}
// first click fetches page 1 shows next hides previous
// Initial load button
loadPlanetsBtn.addEventListener("click", function() {
    fetchPlanets(page1URL);
    nextBtn.style.display = "inline"; // show NEXT
    prevBtn.style.display = "none";   // hide PREVIOUS
});

// NEXT button click fetches page 2 switches buttons hides next shows previous
nextBtn.addEventListener("click", function() {
    fetchPlanets(page2URL);
    nextBtn.style.display = "none";    // hide NEXT
    prevBtn.style.display = "inline";  // show PREVIOUS
});

// PREVIOUS button click goes back to page 1 and switches buttons back
prevBtn.addEventListener("click", function() {
    fetchPlanets(page1URL);
    nextBtn.style.display = "inline";  // show NEXT
    prevBtn.style.display = "none";    // hide PREVIOUS
});