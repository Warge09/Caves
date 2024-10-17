class Engine {
    constructor() {
        let canvas = null;
        let ctx = null;
        this.ctx.width = 1500;
        this.ctx.height = 800;
    }
}

window.onload = init;


function GameLoop() {

}

function drawWorld() {
    
}

const Keys = {
    ArrowUp: false,
    ArrowLeft: false,
    ArrowRight: false,
}

document.addEventListener('click', function(MouseClick) {

})

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