import { Shape } from "./shape";

export class Square extends Shape{
    size: number
    constructor(leftX:number, bottomY:number, size:number){
        super(leftX, bottomY);
        this.size = size
    }
    getWidth() {
        return this.size
    }
    getHeight() {
        return this.size
    }
    getArea() {
        return this.size*this.size
    }
}