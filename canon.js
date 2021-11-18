class Canon{
    constructor(x, y, width, heigth, angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
    }
    display(){
        //Codigo para crear la parte superior del cañon.
        push();
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.heihgt);
        pop();
        //Codigo para crear la parte inferior del cañon.
        rect(70, 20, 200, 200);
        noFill();
    }
    
}