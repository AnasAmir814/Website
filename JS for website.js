var button = document.querySelector(".button");
var dropdownContainer = document.querySelector(".dropdown-container");

button.addEventListener("click", function() {
  dropdownContainer.classList.toggle("show");
});