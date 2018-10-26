// Basic OO Pong
// by Pippin Barr
//
// A primitive implementation of Pong with no scoring system
// just the ability to play the game with the keyboard.
//
// Arrow keys control the right hand paddle, W and S control
// the left hand paddle.
//
// Written with JavaScript OOP.
////////// NEW //////////
//gameOver & max score
var gameOver = false;
var maxScore = 10;
////////// END //////////
// Variable to contain the objects representing our ball and paddles
var ball;
var leftPaddle;
var rightPaddle;

// setup()
//
// Creates the ball and paddles
function setup() {
  createCanvas(640,480);
////////// NEW /////////
  noStroke();
//background to hide lines from ball
  background(255,0,0,1);
////////// END //////////
  // Create a ball
  ball = new Ball(width/2,height/2,5,5,10,5);
  // Create the right paddle with UP and DOWN as controls
  rightPaddle = new Paddle(width-10,height/2,10,60,10,DOWN_ARROW,UP_ARROW, "Player 2", "#8F1D21");
  // Create the left paddle with W and S as controls
  // Keycodes 83 and 87 are W and S respectively
  leftPaddle = new Paddle(0,height/2,10,60,10,83,87, "Player 1","#8F1D21");
}

// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
function draw() {
////// NEW ////////
//if game over basically do this:
if(!gameOver == true){
  // displays the score on screen
      displayScore();
//makes the backgrond transparent for a ghosly effect
    background(0,0,0,50);
// AI. Mover both paddles
  if(ball.vx > 0){
    rightPaddle.moveAI(ball);
    leftPaddle.vy = 0;
  }
  else{
    leftPaddle.moveAI(ball);
    rightPaddle.vy = 0;
  }

//    leftPaddle.handleInput();
//    rightPaddle.handleInput();

    ball.update();
    leftPaddle.update();
    rightPaddle.update();
//tracks score && checks to see if game is over
    if (ball.isOffScreen()) {
      if(ball.x >= width){
        leftPaddle.scored();
        isGameOver(leftPaddle);
      }
      else{
        rightPaddle.scored();
        isGameOver(rightPaddle);
      }

      ball.reset();
      checksScore();

    }

    ball.handleCollision(leftPaddle);
    ball.handleCollision(rightPaddle);

    leftPaddle.display();
    rightPaddle.display();

    ball.display();

  }
}
//displays score on screen
function displayScore(){
  fill(255);
  textSize(15);
  text("--SCORE--",250, 30);
  text(""+leftPaddle.score, leftPaddle.x, 30);
  text(""+rightPaddle.score, rightPaddle.x, 30);
}
//checks if score has reached max score and sees who won
function isGameOver(paddle){
  if (paddle.score == maxScore){
    gameOver = true;
    background(0);
    textSize(30);
    textAlign(CENTER);
// makes the winner Auqua
    text(paddle.name + " wins!", width/2, height/3);
  }
}
// makes winning AI green, losing AI red, and tied yellow
function checksScore(){
  if (leftPaddle.score > rightPaddle.score){
    leftPaddle.color = "#03A678";
    rightPaddle.color = "#8F1D21";
  }
  else if (leftPaddle.score < rightPaddle.score){
    leftPaddle.color = "#8F1S121"
    rightPaddle.color = "#03A678"
  }
  else{
    leftPaddle.color = "#F9690E";
    rightPaddle.color = "#F9690E";
  }
}
///////END/////////
