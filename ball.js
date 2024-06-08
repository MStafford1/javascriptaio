const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let position_x = 0;
let position_y = 0;

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position_x = position_x - 10;
  }
  if (e.code === "ArrowRight") {
    position_x = position_x + 10;
  }
  if (e.code === "ArrowUp") {
    position_y = position_y + 10;
  }
  if (e.code === "ArrowDown") {
    position_y = position_y - 10;
  }
  if (position_x < 0) {
    position_x = 0;
  }
  if (position_y < 0) {
    position_y = 0;
  }
  refresh(); // update the ball's position
}

function refresh() {
  ball.style.left = position_x + "px";
  ball.style.bottom = position_y + "px";
}
