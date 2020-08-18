class Bird {
  constructor(x,y){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  
  World.add(world, this.body);
    this.image = loadImage("sprites/bird.png");
    this.trajectary=[];
    this.smokeimage = loadImage("sprites/smoke.png");

  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x > 10 & this.body.velocity.y){
      var position=[this.body.position.x,this.body.position.y]
      this.trajectary.push(position)

    }
    for(var i=0; i<this.trajectory.length; i++){ image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]); }
  }
}
