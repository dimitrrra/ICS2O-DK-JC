function Person() {
  this.pos = createVector(25, height);
  this.vel = createVector(1, 0);
  this.acc = createVector(0, 0);
 
  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.display = function() {
    fill(10, 255, 67);
    stroke(255);
    ellipse(this.pos.x, this.pos.y-15, 30, 30);
  }

  this.edges = function(pipe) {
    if (this.pos.y > height) {
      this.vel.y *= 0;
      this.pos.y = height;
      if (this.pos.y = 0) {
      this.vel.y *= 0;
      this.pos.y = edges;
 
    
  }
    }
    if((pipe.y-50<person.y || pipe.y+50>person.y)&&(pipe.x-50<person.x || pipe.x+50>person.x)){
}
  }
}
