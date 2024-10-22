class Bat {
  constructor(x, y, sprite, width, height, spritesource) {
    this.x = 0;
    this.y = 0;
    this.Health = 50;
    this.Attack = 10;
    this.AttackSpeed = 5;
    this.sprite = new Image();
    this.sprite.src = spritesource;

    this.sprite = Asset_Controller_getasset("./Assets/Sprites/bat.png");
  }

  drawSprite(x, y) {}
}
