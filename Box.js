class Box {
  constructor(x,y,width,height) {
    var options = {
            'restitution':0,
            'friction':2,
            'density':0.5  
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.colour = color(random(0, 255), (0, 255), (0, 255));
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    noStroke();
    fill(this.colour);
    rect(pos.x, pos.y, this.width, this.height);
  }
};
