// Objective: User has three chances to find the four friendly ghosts. Each chance consists of two clicks. If the user finds a friendly ghost then the click counter is NOT increased, but if the user finds a scary ghost then the click counter is increased.

let playerChances = 3;
let playerStrikes = 0;
let scaryGhostCounter = 0;
let friendlyGhostCounter = 0;
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
const body = document.querySelector("body");
const dashboard = document.querySelector("#dashboard");
const doorsContainer = document.querySelector("#doors-container");
const spanFriendly = document.querySelector(".friendly");
const spanScary = document.querySelector(".scary");
const fearBar = document.querySelectorAll(".fear-bar");

//global scope functions
function displayResults() {
  //hide the sections in main element: dashboard and doors container.
  dashboard.style.display = "none";
  doorsContainer.style.display = "none";
  body.style.backgroundImage = "none";
}
doorsContainer.addEventListener("click", function (event) {
  let randomNumber = Math.floor(Math.random() * 10);
  // opens the door
  event.target.src = "images/opened-door.png";
  // injects the ghost
  event.target.insertAdjacentHTML(
    "afterend",
    `<img class="ghost" src="images/${ghosts[randomNumber]}.png" alt="closed door">`
  );

  // check if random ghost is scary or friendly
  if (
    ghosts[randomNumber] === "scary-ghost-1" ||
    ghosts[randomNumber] === "scary-ghost-2"
  ) {
    playerStrikes++;
    fearBar[scaryGhostCounter].style.background = "red";
    scaryGhostCounter++;
    spanScary.textContent = scaryGhostCounter;

    // if the player strikes equals 2, then reset the strike counter.
    if (playerStrikes === 2) {
      playerStrikes = 0;
      playerChances--;
    }
    // checks if player got game over
    if (playerChances === 0) {
      //display the game over screen
    }
  } else {
    friendlyGhostCounter++;
    spanFriendly.textContent = friendlyGhostCounter;

    if (friendlyGhostCounter === 4) {
      console.log("winner");
    }
  }

  // check players strikes

  // increment the doors clicked variable
  doorsClicked++;
});
