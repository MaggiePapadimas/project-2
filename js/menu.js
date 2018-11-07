//Menu for the game

// will add different version maybe?
// example :
  // player vs player
  // player vs AI
  // AI vs AI
// player vs player button
var button1
// player vs AI
var button2
// AI vs AI
var button3


function preload(){
  button1 = loadImage("assets/images/playervsplayer-pixelart.png");
  button2 = loadImage("assets/images/pixil-frame-0.png");
  button3 = loadImage("assets/images/ai-vs-ai-pixilart.png");
}

menu.prototype.display = function () {
  background(20,150,80);
  textAlign(CENTER);
  textSize(35);
  fill(9);
  text("PONG", width/2, height/4, 50,50);
  button1 = width/4;
  button2 = width/2;
  button3 = width/1;
}
