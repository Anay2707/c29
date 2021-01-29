class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,250,120,30,100);
        image(this.sling2,230,120,30,60);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("#311708");
            if(pointA.x < 270){
                strokeWeight(7);
                line(pointA.x+10, pointA.y+15,pointB.x+25, pointB.y+20);
                line(pointA.x-20, pointA.y+10, pointB.x-20, pointB.y+20);
                image(this.sling3,pointA.x-30,pointA.y-12,15,30);
            }
            else{
                strokeWeight(4);
                line(pointA.x+10, pointA.y+15,pointB.x+25, pointB.y+20);
                line(pointA.x-20, pointA.y+10, pointB.x-20, pointB.y+8);
                image(this.sling3,pointA.x+20,pointA.y-7,15,30);
            }
            pop();
        }
    }
    
}