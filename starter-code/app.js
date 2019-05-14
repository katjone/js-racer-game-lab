// Click button to start the game

const startbtn = document.getElementById("start");

startbtn.addEventListener("click", beginGame);

function beginGame() {
  document.addEventListener("keydown", moveRight);
}

// Make variables for players
const red = document.getElementById("red");
const blue = document.getElementById("blue");

// Make them move
function moveRight(e) {
  // Move Red player
  if (e.code === "KeyF") {
    console.log("RED");
    // find current value
    let whereIsRed = red.offsetLeft;

    // add to it
    whereIsRed = whereIsRed + 30;
    // set new value
    red.style.left = whereIsRed + "px";
  }
  // Move Blue Player
  if (e.code === "KeyJ") {
    console.log("BLUE");
    let whereIsBlue = blue.offsetLeft;
    whereIsBlue = whereIsBlue + 30;
    blue.style.left = whereIsBlue + "px";
  }
}
