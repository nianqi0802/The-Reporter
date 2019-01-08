var dots = [];




class Dots{
	constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
  }
  
  show(){
    noStroke();
    
    fill(179,130,62,this.s);
  	ellipse(this.x,this.y,13);
  }
  
  disappear(){
  	this.s = 0;
  }
  
  near(){
    let d = dist(mouseX,mouseY,this.x,this.y);
  	return (mouseIsPressed && d<100)
    
  }
}
  