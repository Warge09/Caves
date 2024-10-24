let canvas = null
let context = null

function runGameLoop() {
    canvas = document.getElementById('GameCanvas');
    context = canvas.getContext('2d');

    gameLoop = new GameLoop();
    gameLoop.start();
    gameLoop.run();

}

dialogues = [
    {text:"Hello",
    options:[
        {prompt: 'Rumors', response: 'Have you heard of the high elves?'},
        {prompt: 'bye', response: 'farewell'}
    ]},
    {text:"blah blah",
        options:[
            {prompt: 'Option 1', response: 'Have you heard of the high elves?'},
            {prompt: 'Option 2', response: 'farewell'}
    ]}
        
]

class Sprite {
  constructor(image) {
      this.image = new Image(32, 32);
      this.image.src = image
  }

  draw(x, y) {
      context.drawImage(this.image, 0, 0, 32, 32, x, y, 64, 64);
  }
}

class SpriteSheet extends Sprite {
  constructor(image, nFrames) {
      super(image)

      this.nframes = nFrames
      this._currentFrame = 0
      this._timer = 0;
      this._updateRate = 0.05
  }

  draw(x, y) {
      context.drawImage(this.image, this._currentFrame * 32, 0, 32, 32, x, y, 64, 64);
  } 

  update(deltaTime) {
      this._timer += deltaTime;
      if (this._timer > this._updateRate) {
          this._timer = 0;
          this._currentFrame = (this._currentFrame + 1) % this.nframes
      }
  }
}


class GameLoop {
  constructor() {
      this.keep_running = true;
      this.lastFrameTime = new Date().getMilliseconds();

      this.character = new Character();
      this.npc = new NPC(this.character);
      this.buttons = document.getElementById("dialogueBox");
  }

  start() {
    console.log(canvas.width);
    console.log(canvas.height);

    for (let i = 0; i < dialogues[0].options.length; i++) {
        const button = document.createElement('button');
        button.textContent = `Button ${i}`;
        
        // Add an event listener to each button
        button.addEventListener('click', () => {
            this.character.response = i
            console.log(this.character.response)
        });
        
        this.buttons.appendChild(button);
    }

    }
    update(deltaTime) {

      this.character.update(deltaTime);
    }
    drawDialogue() {

    }
    run() {
      const currentTime = Date.now();
      const deltaTime = (currentTime - this.lastFrameTime) / 1000;
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      this.update(deltaTime);
      
      this.character.draw();
      this.npc.draw();

      this.lastFrameTime = currentTime; 

      requestAnimationFrame(() => { this.run(); });
    }
    get keepAlive() {
      return this.keep_running;
    }

    quit() {
    alert('bye')
    }
}



