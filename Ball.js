class Ball{
    constructor(x,y,radius){
    
        var options = {
            restitution : 0.1,
            density : 12

        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle =this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS)
        strokeWeight(4);
        fill(100);
        ellipse(0,0,this.radius,this.radius )
        pop();

    }
}