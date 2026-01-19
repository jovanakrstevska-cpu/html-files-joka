// Get values from the user
const animalName = prompt("Enter animal name:");
const animalKind = prompt("Enter animal kind:");
const animalMessage = prompt("What should the animal say?");

// Create the object
const animal = {
  name: animalName,
  kind: animalKind,
  speak: function (message) {
    // DOM manipulation instead of console.log
    document.getElementById("output").textContent =
      this.name + " says: '" + message + "'";
  }
};

// Call the method
animal.speak(animalMessage);