class Character {
  constructor() {
      this.sprite = new SpriteSheet('Idle (32x32).png', 11)
      this.speed = 500;
      this.width = 64;
      this._x = 50;
      this._y = canvas.height - this.width;
      this.horizontal_force = 0
      this.vertical_force = 0
      this.response = null

      document.addEventListener('keydown', (event) => {
          if (event.key === 'ArrowLeft') {
              this.horizontal_force = -this.speed;
             
          }
          if (event.key === 'ArrowRight') {
              this.horizontal_force = this.speed;
          }
          if (event.key === 'ArrowUp') {
              this.vertical_force = -this.speed;
             
          }
          if (event.key === 'ArrowDown') {
              this.vertical_force = this.speed;
          }
      });
      
      document.addEventListener('keyup', (event) => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
              this.horizontal_force = 0;
          }
          if (event.key === 'ArrowUp' || event.key === 'ArrowDown' ) {
              this.vertical_force = 0;
          }
      });
  }
  
  draw() {
      this.sprite.draw(this._x, this._y);

      if (this.response != null) {
          context.font = "bold 18px serif";

          context.fillText(dialogues[0].options[this.response].prompt, this._x, this._y - 60)
      }
  }
  update(deltaTime) {
      this._x += this.horizontal_force * deltaTime;
      this._y += this.vertical_force * deltaTime;
      this.sprite.update(deltaTime)
  }

}