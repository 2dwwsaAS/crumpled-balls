class Paper{
  constructor(){

    var options ={
       isStatic : false,
       restitution : 0.3,
       friction : 0.5,
       density : 1.2
    }
     this.body = Bodies.circle(250,545,18,options);
     this.r = 50;
     this.image = loadImage("images/paper.png");
     World.add(world,this.body);
  }
    display(){
     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x,pos.y);
     fill(255);
     rotate(angle);
     imageMode(CENTER);
     image(this.image,0,0,this.r,this.r);
     pop();
    }
}