// Paddle
//
// A class that defines how a paddle behaves, including the ability
// to specify the input keys to move it up and down

// Paddle constructor
//
// Sets the properties with the provided arguments or defaults
function Paddle(x,y,w,h,speed,downKey,upKey,name, color) {
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
  this.name = name;
  this.color= color;
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
  if(abs(ball.x - this.x) >2*this.w ){
    if(ball.y > this.y){
      this.vy = this.speed;
    }
  else if(ball.y < this.y) this.vy = -this.speed;
  }
}
////////// END //////////
