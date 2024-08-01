import { Shape } from "./shape"

export class Ractangle extends Shape{
    rightX: number
    topY: number
    constructor(leftX: number, botomY: number, rightX: number, topY: number) {
        super(leftX, botomY)
        this.rightX = rightX
        this.topY = topY
    }
    getWidth() {
        return ((this.topY - this.bottomY)*2)*0.5
    }
    getHeight() {
        return ((this.rightX - this.leftX)*2)*0.5
    }
    getArea() {
        return ((this.topY - this.bottomY)*2)*0.5 * ((this.rightX - this.leftX)*2)*0.5
    }
}