// const DEFAULT_URL = "https://www.codesmith.io/";
// const DEFAULT_OPTION = "hideAll";
// const DEFAULT_HIDE = "command + P";
// const DEFAULT_RESTORE = "command + O";

let keysPressed = {};
// document.addEventListener("keydown", (event) => {
//   keysPressed[event.key] = true;
//   console.log(keysPressed);
//   console.log(keysPressed);
//   if (keysPressed["ArrowLeft"] && event.key == "ArrowRight") {
//     console.log(`it's working!!`);
//     window.open("https://www.google.com", "_self");
//   }
// });

this.addEventListener("keydown", () => {
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
