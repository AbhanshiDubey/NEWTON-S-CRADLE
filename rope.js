class Rope {

    constructor (body1,point2,offsetX,offsetY){

        this.offsetX=offsetX
        this.offsetY=offsetY
var option = {
bodyA:body1,
bodyB:pointB,
length:10,
stiffness:0.04
}


this.chain = Matter.Constraint.create (option)
World.add(world, this.chain);
    }

display(){

if (this.chain.bodyA){
    var pointA = this.chain.bodyA.position
    var pointB = this.chain.pointB
    push () ;
    strokeWeight (4);
    stroke(67,31,12)
    line (pointA.x,pointA.y,pointB.x,pointB.y)
    line (pointA.x,pointA.y,pointB.x-50,pointB.y)
    pop();
}
}

fly () {
  this.chain.bodyA = null
}

attach (body) {
    this.chain.bodyA = body
}
}

