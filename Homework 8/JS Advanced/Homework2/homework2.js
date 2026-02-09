//finds the button on the page
const loadUserBtn = document.getElementById("loadUser");
//finds the part of the table where will go the users data
const userTableBody = document.getElementById("userTableBody");

//when button is clicked run the code
loadUserBtn.addEventListener('click', function() {

    //asks the internet for some informaton 
 fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json()) // convert the reply
        .then(user => {
            
            // clears data from the table
            userTableBody.innerHTML = '';

            // creates a new table row
            const row = document.createElement('tr');

            // fills row with user details
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.website}</td>
                <td>${user.address.city}</td>
            `;

            // add row to the table
            userTableBody.appendChild(row);
        })
        // handle errors if something goes wrong with fetch
        .catch(error => {
            console.log('Error fetching user:', error);
        });

});


