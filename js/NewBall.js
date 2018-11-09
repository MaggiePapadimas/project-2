//slows down paddles
function NewBall(x, y, vx, vy, size, speed) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.size = size;
  this.speed = speed;
}
// Moves according to velocity, constrains y to be on screen,
// checks for bouncing on upper or lower edgs, checks for going
// off left or right side.
NewBall.prototype.update = function () {
  // Update position with velocity
  this.x += this.vx;
  this.y += this.vy;

  // Constrain y position to be on screen
  this.y = constrain(this.y,0,height-this.size);

  // Check for touching upper or lower edge and reverse velocity if so
  if (this.y === 0 || this.y + this.size === height) {
    this.vy = -this.vy;
  }
}

// isOffScreen()
//
// Checks if the ball has moved off the screen and, if so, returns true.
// Otherwise it returns false.
NewBall.prototype.isOffScreen = function () {
  // Check for going off screen and reset if so
  if (this.x + this.size < 0 || this.x > width) {
    return true;
  }
  else {
    return false;
  }
}

//draws a blue circle for the ball
NewBall.prototype.display = function () {
  fill(0,150,255);
  ellipse(this.x,this.y,this.size,this.size);
}
// handleCollision(paddle)
//
// Check if this ball overlaps the paddle passed as an argument
// and if so reverse x velocity to bounce
NewBall.prototype.handleCollision = function(paddle) {
  // Check if the ball overlaps the paddle on x axis
  if (this.x + this.size > paddle.x && this.x < paddle.x + paddle.w) {
    // Check if the ball overlaps the paddle on y axis
    if (this.y + this.size > paddle.y && this.y < paddle.y + paddle.h) {
      //make the paddle slower
      paddle.speed -= 1;
    }
  }
}

// Set position back to the middle of the screen
NewBall.prototype.reset = function () {
  this.x = width/2;
  this.y = height/2;
  this.vx = ball.speed;
  this.vy = random(-10,10);
  while(abs(ball.vy)< 3){
    this.vy = random(-10,10);
  }
}
