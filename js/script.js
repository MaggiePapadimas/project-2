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

//gameOver & max score & game screen
var gameOver = false;
var maxScore = 10;
var gameScreen = 0;
// Variable to contain the objects representing our ball and paddles and menu
var ball;
var leftPaddle;
var rightPaddle;
var gameMenu;
//newBall and ballFoods Variable
var newBall;
var ballFoods;
//buttons for main meanu
var button;
var button1;
var button1Y;
var button2;
var button2Y;
var button3;
var button3Y;
//game screens
var gameScreen = 0;
// images
function preload(){
  buttonImage1 = loadImage("assets/images/pvp.png");
  buttonImage2 = loadImage("assets/images/pva.png");
  buttonImage3 = loadImage("assets/images/ava.png");
}
// setup()
//
// Creates the ball and paddles
function setup() {
  createCanvas(750,600);
  noStroke();
//background to hide lines from ball
  background(255,0,0,1);
  // Create a ball
  ball = new Ball(width/2,height/2,5,5,10,10);
  newBall = new NewBall(width/2,height/2,6,6,20,6);
  gameMenu = new GameMenu("#700000", buttonImage1, buttonImage2, buttonImage3, width, height);
}

// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
function draw() {
  if(gameScreen == 0){
    gameMenu.display();
  }
  //game screens so you can't click the button AKA the other screens arent active
  else if (gameScreen == 1) {
    mainGame();
    displayScore();
  }
  else if (gameScreen == 2){
    displayScore();
    }
}
//displays score on screen
function displayScore(){
  fill(255);
  textSize(15);
  text("--SCORE--", width/2.5, 30);
  text(""+leftPaddle.score, leftPaddle.x, 30);
  text(""+rightPaddle.score, rightPaddle.x, 30);
}
//checks if score has reached max score and sees who won
function isGameOver(paddle){
  if (paddle.score == maxScore){
    gameScreen = 2;
    background(0);
    push();
    textSize(30);
    textAlign(CENTER);
    text(paddle.name + " wins!", width/2, height/3);
    text("click anywhere for menu", width/2, height/1.5);
    pop();
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
//the main game
function mainGame(){
//makes the backgrond transparent for a ghosly effect
  background(0,0,0,50);
// AI. Mover both paddles

  leftPaddle.handleInput(ball);
  rightPaddle.handleInput(ball);
    //handles the updtaes for paddles, new ball and ball
  ball.update();
  newBall.update();
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
    //resets ball, checks score and gives random location to ballFood
    ball.reset();
    checksScore();
    var x = random(0 , width);
    var y = random(0, height);
    ballFoods.push(new BallFood(x, y,30));

  }
  //handles collisions
  ball.handleCollision(leftPaddle);
  ball.handleCollision(rightPaddle);
  newBall.handleCollision(leftPaddle);
  newBall.handleCollision(rightPaddle);
  //displays paddles
  leftPaddle.display();
  rightPaddle.display();
  //displays the ball and new ball
  ball.display();
  newBall.display();
  //adds food for ball
  for(var i = 0; i < ballFoods.length; i++){
    ballFoods[i].display();
    var hit = ballFoods[i].handleCollision(ball);
    if(hit){
      ballFoods.splice(i,1);
    }
  }
}
//mouse pressed for buttons.
function mousePressed (){
  if (gameScreen == 0) {

    var buttonPressed;
    buttonPressed = gameMenu.handleInput(mouseX, mouseY);
    //if pressed then pvp game starts
    if(buttonPressed == 1){
      rightPaddle = new Paddle(width-10,height/2,10,60,10,DOWN_ARROW,UP_ARROW, "Player 2", "#8F1D21", false, 1);
      leftPaddle = new Paddle(0,height/2,10,60,10,83,87, "Player 1","#8F1D21", false, -1);
      gameScreen = 1;
      background(0);
      ballFoods = [];
    }
    //if pressed then pva game starts
    else if(buttonPressed == 2){
      rightPaddle = new Paddle(width-10,height/2,10,60,10,DOWN_ARROW,UP_ARROW, "Computer", "#8F1D21", true, 1);
      leftPaddle = new Paddle(0,height/2,10,60,10,83,87, "Player","#8F1D21", false, -1);
      gameScreen = 1;
      background(0);
      ballFoods = [];
    }
    //if pressed then ava game starts
    else if(buttonPressed == 3){
      rightPaddle = new Paddle(width-10,height/2,10,60,10,DOWN_ARROW,UP_ARROW, "Computer 2", "#8F1D21", true, 1);
      leftPaddle = new Paddle(0,height/2,10,60,10,83,87, "Computer 1","#8F1D21", true, -1);
      gameScreen = 1;
      background(0);
      ballFoods = [];
    }
  }
  if (gameScreen == 2){
    gameScreen = 0;
  }
}
