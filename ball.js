class ball{
    constructor(x,y,radius){
        var options = {
            'restitesution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body=bodies.circle(x,y,radius,options);
        this.radius=radius;
        world.add(world,this.body);
    } 
    display(){
        var pos = tthis.body.position;
        fill(176,219,83);
        ellipseMode(CENTER);
        ellipse(pos.x,posy,this.radius)
    }
}