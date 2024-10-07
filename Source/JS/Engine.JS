
let SecondsPassed;
let OldTimeStamp;
let FramesPerSecond;
let canvas;
let context;

window.onload = init;

function init() {
    canvas = document.getElementById('GameCanvas');
    const ctx = canvas.getContext('2d');

    draw();
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

}