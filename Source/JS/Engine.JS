
let SecondsPassed;
let OldTimeStamp;
let FramesPerSecond;
this.ctx = null;

window.onload = init;


function init() {
    const canvas = document.getElementById("GameCanvas");
    ctx = canvas.getContext("2d");
    
    ctx.fillStyle = "rgb(256 100 5)";
    ctx.fillRect(10, 10, 50, 50);

    draw();
    
}

function drawWorld() {
    
}

const Keys = {
    ArrowUp: false,
    ArrowLeft: false,
    ArrowRight: false,
}

document.addEventListener('keydown', function(PlMove) {
    switch (Event.PlMove) {
        case 'ArrowUp':
         y -+ speed;
         break;
         case 'ArrowLeft':
         x -= speed;
         break;
         case 'ArrowRight':
         x += speed;
         break;
    }

});

function FrameUpdate() {
    drawWorld();

}