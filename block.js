class Block{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
           // restitutions:2.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = 50;
        this.height = 70;
        //this.scale = 0.9
        World.add(world,this.body)
    }

    display(){
        rectMode(CENTER);
        imageMode(CENTER);
       // image(this.image, 50,70, this.width, this.height)
        
    }
}