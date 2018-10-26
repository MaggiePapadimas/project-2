// Paddle
//
// A class that defines how a paddle behaves, including the ability
// to specify the input keys to move it up and down

// Paddle constructor
//
// Sets the properties with the provided arguments or defaults
function Paddle(x,y,w,h,speed,downKey,upKey) {
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.w = w;
  this.h = h;
  this.speed = speed;
  this.downKey = downKey;
  this.upKey = upKey;
////// NEW /////////
  this.score= 0;
////// END ////////
}

// handleInput()
//
// Check if the up or down keys are pressed and update velocity
// appropriately
Paddle.prototype.handleInput = function() {
  if (keyIsDown(this.upKey)) {
    this.vy = -this.speed;
  }
  else if (keyIsDown(this.downKey)) {
    this.vy = this.speed;
  }
  else {
    this.vy = 0;
  }
}

// update()
// Update y position based on velocity
// Constrain the resulting position to be within the canvas
Paddle.prototype.update = function() {
  this.y += this.vy;
  this.y = constrain(this.y,0,height-this.h);
}

// display()
//
// Draw the paddle as a rectangle on the screen
Paddle.prototype.display = function() {
  fill(255);
  rect(this.x,this.y,this.w,this.h);
}
//// NEW ///////
//displays score on screen
function displayScore(){
  textSize(15);
  text("--SCORE--",250, 30);
  text(""+leftPaddle.score, leftPaddle.x, 30);
  text(""+rightPaddle.score, rightPaddle.x, 30);
}
//makes scored smaller
function score(paddle){
  this.score+= 1;
  if (this.score == maxScore){
    gameOver = true;
    background(0);
    textSize(30);
    textAlign(CENTER);
    text(this.name + " wins!", width/2, height/3);
  }
}
//makes scorer bigger
function scoredOn(paddle){
  this.h+= 10;
}
////////// END //////////
