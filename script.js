const doorsContainer = document.querySelector("#doors-container");

doorsContainer.addEventListener("click", function (event) {
  // opens the door
  console.log(event);
  event.target.src = "images/opened-door.png";
  // injects an the ghost()
  event.target.insertAdjacentHTML(
    "afterend",
    `<img class="ghost" src="images/bad-ghost-1.png" alt="closed door">`
  );
});
