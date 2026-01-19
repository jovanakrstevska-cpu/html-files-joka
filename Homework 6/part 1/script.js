const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(function (p) {
  p.textContent = "This paragraph text was changed with JavaScript!";
});

const headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

headers.forEach(function (header) {
  header.textContent = "This header was changed with JavaScript!";
});