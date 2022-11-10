// Objective: User has three chances to find the four friendly ghosts. Each chance consists of two clicks. If the user finds a friendly ghost then the click counter is NOT increased, but if the user finds a scary ghost then the click counter is increased.

let playerChances = 3;
let playerClicks = 0;
// Keeps track of how many doors the player has opened.
let doorsClicked = 0;
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
  let randomNumber = Math.floor(Math.random() * 10);
  console.log(randomNumber);
  // opens the door
  event.target.src = "images/opened-door.png";
  // injects an the ghost()
  event.target.insertAdjacentHTML(
    "afterend",
    `<img class="ghost" src="images/${ghosts[randomNumber]}.png" alt="closed door">`
  );
  // increment the doors clicked variable
  doorsClicked++;
});
