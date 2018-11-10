//this creates the game menu
function GameMenu(color, button1, button2, button3, w, h) {
  this.color= color;
  this.button1 = button1;
  this.button2 = button2;
  this.button3 = button3;
  this.w = w;
  this.h = h;
  this.buttonX = this.w/2.5;
  this.button1Y = this.h/3;
  this.button2Y = this.h/2;
  this.button3Y = this.h/1.5;
}
//for clicking on screen
GameMenu.prototype.handleInput = function(x, y) {
  var width = this.button1.width;
  var height = this.button1.height;
  if(x > this.buttonX && x < this.buttonX + width){
    if(y > this.button1Y && y < this.button1Y + height){
      return 1;
    }
    else if(y > this.button2Y && y < this.button2Y + height){
      return 2;
    }
    else if(y > this.button3Y && y < this.button3Y + height){
      return 3;
    }
    else{
      return 0;
    }
  }
  else{
    return 0;
  }
}
//displays the menu
GameMenu.prototype.display = function() {
//////////////////NEW///////////
  fill(this.color);
  gameScreen = 0;
  background(0);
  textSize(35);
  fill(255);
  text("PONG", this.w/2.5, this.w/4);
  image(this.button1, this.buttonX, this.button1Y);
  image(this.button2, this.buttonX, this.button2Y);
  image(this.button3, this.buttonX, this.button3Y);
}
