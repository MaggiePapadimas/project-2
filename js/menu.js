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
  new loadImage();
}

function menu (){
  background(20,150,80);
  textAlign(CENTER);
  textSize(35);
  fill(9);
  text("PONG", width/2, height/4, 50,50);

}

menu.prototype.display = function () {

}
