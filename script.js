const door = document.querySelector("#doors-container");

door.addEventListener("click", function (event) {
  event.target.src = "images/opened-door.png";
});
