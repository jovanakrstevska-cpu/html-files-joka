$(document).ready(function () {

  let ourButton = $("button").first();

  ourButton.on("click", function () {

    let inputElement = document.getElementById("nameInput");
    let name = inputElement.value;

    if (name === "") {
      $("#greeting").text("Please enter a name");
    } else {
      $("#greeting").text("Hello there " + name + "!");
    }
  });

});
