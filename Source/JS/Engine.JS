
let SecondsPassed;
let OldTimeStamp;
let FramesPerSecond;





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