$(document).ready(function() {

    $("#generateBtn").click(function() {

        let textInput = document.getElementById("headerText");
        let colorInput = document.getElementById("headerColor");

        let text = textInput.value;
        let color = colorInput.value;

        let message = $("#message");

    
        if (text === "") {
            message.text("Error: Header text cannot be empty.");
            return;
        }

        if (color === "") {
            message.text("Error: Header color cannot be empty.");
            return;
        }

        // Create the new header
        let newHeader = $("<h1>").text(text);
        newHeader.css("color", color);

        // Add to the page
        $("#headerContainer").append(newHeader);

    });

});