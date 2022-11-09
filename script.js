// Objective: User has three chances to find the four friendly ghosts. Each chance consists of two clicks. If the user finds a friendly ghost then the click counter is NOT increased, but if the user finds a scary ghost then the click counter is increased.

const playerChances = 3;
const playerClicks = 0;
const doorsClicked = 0;
const ghosts = [
  "scary-ghost-1",
  "scary-ghost-1",
  "scary-ghost-1",
  "scary-ghost-2",
  "scary-ghost-2",
  "scary-ghost-2",
  "casper",
  "casper",
  "casper",
  "casper",
];

const doorsContainer = document.querySelector("#doors-container");

doorsContainer.addEventListener("click", function (event) {
  // opens the door
  console.log(event);
  event.target.src = "images/opened-door.png";
  // injects an the ghost()
  event.target.insertAdjacentHTML(
    "afterend",
    `<img class="ghost" src="images/${ghosts[doorsClicked]}.png" alt="closed door">`
  );
  // Determine if the user found a friendly ghost or a scary ghost.
});
