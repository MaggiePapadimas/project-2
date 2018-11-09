// Paddle
//
// A class that defines how a paddle behaves, including the ability
// to specify the input keys to move it up and down

// Paddle constructor
//
// Sets the properties with the provided arguments or defaults
function Paddle(x,y,w,h,speed,downKey,upKey,name, color, isAI, side) {
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.w = w;
  this.h = h;
  this.speed = speed;
  this.downKey = downKey;
  this.upKey = upKey;
  console.log(this.upKey);

////// NEW /////////
  this.score= 0;
  this.name = name;
  this.color= color;
  this.isAI = isAI;
  this.side = side;
////// END ////////
}

// handleInput()
//
// Check if the up or down keys are pressed and update velocity
// appropriately

Paddle.prototype.playerInput = function(){
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

Paddle.prototype.handleInput = function (ball) {
  if(this.isAI){
    this.moveAI(ball);
  }
  else{
    this.playerInput();
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
// Draws the paddles as RED rectangles on the screen
Paddle.prototype.display = function() {
//////////////////NEW///////////
  fill(this.color);
//////END////////////
  rect(this.x,this.y,this.w,this.h);
}
//////////////////NEW///////////
// adds 1 to score after ever score
Paddle.prototype.scored = function(){
  this.score += 1;
}
// AI
Paddle.prototype.moveAI = function(ball){
  if(ball.vx * this.side > 0){
    if(abs(ball.x - this.x) >2*this.w ){
      if(ball.y > this.y){
        this.vy = this.speed;
      }
      else if(ball.y < this.y) this.vy = -this.speed;
    }
  }
  else this.vy = 0;
}
////////// END //////////
