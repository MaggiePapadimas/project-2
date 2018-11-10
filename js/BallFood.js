//speeds original ball up
function BallFood(x, y, size) {
  this.x = x;
  this.y = y;
  this.size = size;
}

//draws a green square for the ball
BallFood.prototype.display = function () {
  fill(0,255,0);
  rect(this.x,this.y,this.size,this.size);
}
// handleCollision(paddle)
//
// Check if this ball overlaps the paddle passed as an argument
// and if so reverse x velocity to bounce
BallFood.prototype.handleCollision = function(ball) {
  // Check if the ball overlaps the paddle on x axis
  if (this.x + this.size > ball.x && this.x < ball.x) {
    // Check if the ball overlaps the paddle on y axis
    if (this.y + this.size > ball.y && this.y < ball.y) {
      //make ball faster
      ball.vx *= 2;
      return true;
    }
  }
  return false;
}
