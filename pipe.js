function Pipe(x) {
  //this.pos = createVector(50, height);
  //this.vel = createVector(1, 0);
  //this.acc = createVector(0, 0);
  this.len = 900;
  this.size = 60;
  this.x = x;
  this.y = 300-50;
  this.color = random(0,255);
  this.sep = 125;
 
  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    this.x=this.x-4;
    if (this.x<-80) {
      this.x= 800;
    }
     // this.vel.add(this.acc);
     // this.pos.add(this.vel);
     // this.acc.set(0, 0);
  }

  this.display = function() {
    fill(color, 38, 255);
    stroke(255);
   
    rect(this.x, this.y, this.size, this.len);
    rect(this.x, this.y-this.sep, this.size, this.len-1000);
    
    //rect(this.x+350,this.y+75, this.width,this.length);
    //rect(this.x+350, this.y-275,this.width,this.length-1000);
    
    //rect(this.x+700, this.y-15,this.width,this.length);
    //rect(this.x+700,this.y-155,this.width,this.length-1500);
  }

  this.edges = function() {
    if (this.pos.y > height) {
      this.vel.y *= 0;
      this.pos.y = height;
    }
  }
}
