// declare an empty object to catch key presses
let keysPressed = {};
// add event listener for key down that adds the key to the empty object with a value of true
//Hide your page and show a fake with Left/Right
document.addEventListener("keydown", (event) => {
  keysPressed[event.key] = true;
  console.log(keysPressed);
  if (keysPressed["ArrowLeft"] && event.key == "ArrowRight") {
    console.log(`It works!!!`);
  }
});
//Return to your regularly scheduled webpage with Up/Down
document.addEventListener("keydown", (event) => {
  keysPressed[event.key] = true;
  console.log(keysPressed);
  if (keysPressed["ArrowUp"] && event.key == "ArrowDown") {
    console.log(`It works again!!!`);
  }
});

// add event listener for key up that removed the key from the empty object (only true when depresssed)
document.addEventListener("keyup", (event) => {
  delete keysPressed[event.key];
});
// check for combination of two keys

//step1: pre load a safe page

//step2; trigger/open that page
