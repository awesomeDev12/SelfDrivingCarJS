class Car{
   
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.controls=new Controls();
        this.speed=0;
        this.acceleration=0.2;
        this.maxSpeed=3;
        this.maxReverseSpeed=-2;
        this.friction=0.1;
    }

    update(){
        // console.table(this);
        if(this.controls.forward){
            this.speed+=this.acceleration;
        }
        if(this.controls.reverse){
            this.speed-=this.acceleration;
        }
        if(this.speed>this.maxSpeed){
            this.speed=this.maxSpeed;
        }
        if(this.speed<this.maxReverseSpeed){
            this.speed=this.maxReverseSpeed;
        }
        
        this.y-=this.speed;

        //friction
        //kinetic friction
        if(this.speed>0){
            this.speed-=this.friction;
        }
        if(this.speed<0){
            this.speed+=this.friction;
        }
        //static friction
        //if we do not write the following code 
        //then then upon releasing in just the right way
        //the car will always be in motiion
        //this is because if the speed is not exactly zero then 
        //then friction will move it up and down continuously for eternity
        if(Math.abs(this.speed)<this.friction){
            this.speed=0;
        }

        if(this.controls.left){
            this.x-=2;
        }
        if(this.controls.right){
            this.x+=2;
        }
    }

    draw(ctx){
        ctx.beginPath();
        ctx.rect(
            this.x-this.width/2,
            this.y-this.height/2,
            this.width,
            this.height
        )
        ctx.fill();
    }


}
