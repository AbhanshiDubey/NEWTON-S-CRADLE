class Roof {

    constructor(x,y,w,h){
    
     var option = {
    // isStatic : true,
       
     
     }
    
    this.body = Bodies.rectangle(x,y,w,h,option);
    this.width = w ;
    this.height = h ;
    World.add(world,this.body);
    
    }
    
    display () {
    
     push ()
     translate(this.body.position.x,this.body.position.y);
     // for rotating the second box.
    rotate (this.body.angle);
    rectMode(CENTER);
    //fill("grey");
    rect(0,0,this.width,this.height);
    pop ();

        }
     }