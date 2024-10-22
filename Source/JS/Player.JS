class Player {
  constructor(xpos, ypos, height, width) {
    this.Health = 100;
    this.MovementSpeed = 16;
    this.isdead = false;
    this.xpos = 50;
    this.ypos = canvas.height - this.width;
  }
}
