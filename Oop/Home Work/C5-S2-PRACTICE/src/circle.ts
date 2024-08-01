import { Shape } from "./shape"

export class Circle extends Shape{
    radius:number
    constructor(leftX:number,bottomY:number, radius:number){
        super(leftX, bottomY)
        this.radius = radius
    }
    getWidth(){
        return this.radius * 2
    }
    getHeight() {
        return this.radius * 2
    }
    getArea() {
        return 3.14 * (this.radius)**2
    }
}
   