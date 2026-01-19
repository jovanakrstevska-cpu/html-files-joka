const title = prompt("Enter book title:");
const author = prompt("Enter book author:");
const statusInput = prompt("Have you read the book? (true / false)");

// Convert string to boolean properly
const readingStatus = statusInput.toLowerCase() === "true";

const book = {
  title: title,
  author: author,
  readingStatus: readingStatus,
  getInfo: function () {
    if (this.readingStatus === true) {
      return "Already read '" + this.title + "' by " + this.author + ".";
    } else {
      return "You still need to read '" + this.title + "' by " + this.author + ".";
    }
  }
};

document.getElementById("result").textContent = book.getInfo();