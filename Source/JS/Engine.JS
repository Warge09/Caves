let canvas = null;
let ctx = null;

function runGameLoop() {
  const canvas = document.getElementById("GameCanvas");
  const ctx = canvas.getContext("2d");

  gameLoop = new GameLoop();
  gameLoop.start();
  gameLoop.run();
}
