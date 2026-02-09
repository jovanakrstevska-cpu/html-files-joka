//create inputs for title, priority, color, description
//create buttons to add and show reminders
//store reminders in an array
//display reminders in a table
//title color should match the reminder color

//inputs
const titleInput = document.getElementById('title');
const priorityInput = document.getElementById('priority');
const colorInput = document.getElementById('color');
const descriptionInput = document.getElementById('description');
const generateButton = document.getElementById('generateButton');
const tableBody = document.getElementById('tableBody');

const reminders = [];

//Button click
generateButton.addEventListener('click', function() {
   
    if (
        titleInput.value === '' || 
        priorityInput.value === '' || 
        colorInput.value === '' || 
        descriptionInput.value === ''
    ) {
        console.log('Please fill in all fields');
        return;
    }   

    const reminder = {
        title: titleInput.value,
        priority: priorityInput.value,
        color: colorInput.value,
        description: descriptionInput.value
    };

        reminders.push(reminder);
        displayReminders();
});
   
function displayReminders() {
    tableBody.innerHTML = '';

    reminders.forEach(function (reminder) {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td style="color:${reminder.color}">${reminder.title}</td>
            <td>${reminder.priority}</td>
            <td>${reminder.description}</td>
        `;

        tableBody.appendChild(row);
    });
}
