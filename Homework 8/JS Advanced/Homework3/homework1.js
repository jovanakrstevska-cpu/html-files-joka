//finds the button on the page
const loadPlanets = document.getElementById("loadPlanets");
//finds the part of the table where will go the users data
const planetsTableBody = document.getElementById("planetsTableBody");

//when button is clicked run the code
loadPlanets.addEventListener('click', function() {

    //asks the internet for some informaton 
 fetch('https://swapi.py4e.com/api/planets/?page=1')
        .then(function (response) {
            return response.json(); // converts the response to JSON format
        })
        .then(function (data) {

            // clearstable
            planetsTableBody.innerHTML = '';

            //get planets array
            const planets = data.results;

            //loop through planets
            for (let i = 0; i < planets.length; i++) {

                const planet = planets[i];
            
            // creates a new table row
            const row = document.createElement('tr');

            // fills row with planet details
            row.innerHTML = `
                <td>${planet.name}</td>
                <td>${planet.population}</td>
                <td>${planet.climate}</td>
                <td>${planet.gravity}</td>
        
            `;

            planetsTableBody.appendChild(row);
            }
        })
        
        .catch(function (error) {
            console.log('Error fetching planets:', error);
        });

});


