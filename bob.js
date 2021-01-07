class Bob {

    constructor(x,y){

        var option = {
         isStatic:true,
         restitution : 0.3 ,
         friction : 0.5 ,
         density : 0.2 

         }
 
         this.body = Bodies.circle(x,y,50,option);
         World.add(world,this.body);
     }
 
 display () {

       push ()
       translate(this.body.position.x,this.body.position.y);
       // for rotating the second box.
       rotate (this.body.angle);
       ellipseMode(RADIUS);
       fill("purple");
      // stroke();
       ellipse(0,0,30,30); 
       pop ();

         }
}