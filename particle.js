class Particle {
  constructor(x, y, r) {
    var options = {
        'restitution':1.3,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.circle(x, y, r/2, options);
    this.x = x;
    this.y = y;
    this.r = r;
    this.color=color(random(0,255),random(0,255),random(0,255))
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(this.color);
    ellipse(this.x, this.y, this.r,this.r);
    pop();
  }
};
