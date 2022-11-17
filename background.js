let keysPressed = {};

chrome.window.addEventListener("keydown", (event) => {
  keysPressed[event.key] = true;
  console.log(keysPressed);
  console.log(keysPressed);
  if (keysPressed["ArrowLeft"] && event.key == "ArrowRight") {
    console.log(`it's working!!`);
    window.open("https://www.google.com", "_self");
  }
});

document.addEventListener("keyup", (event) => {
  delete keysPressed[event.key];
});
