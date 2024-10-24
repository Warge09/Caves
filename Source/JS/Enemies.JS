class NPC {
  constructor(character) {
      this.width = 32;
      this.sprite = new Sprite('character.png');
      this._x = 250;
      this._y = canvas.height - this.width;
      this.character = character
  }

  draw() {
      this.sprite.draw(this._x, this._y - 32)

      if (this.character.response == null) {
          context.font = "bold 18px serif";
          context.fillText(dialogues[0].text, this._x, this._y - 64)

      } else {
          context.font = "bold 18px serif";
          context.fillText(dialogues[0].options[this.character.response].response, this._x, this._y - 60)
      }

  }
}
