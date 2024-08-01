// class Ractangle{
//     private wieght!: number
//     private hight!: number
//     private area!:number
//     setWieght(wieght: number) {
//         this.wieght = wieght
//     }
//     setHight(hight: number) {
//         this.hight = hight
//     }
//     setArea(area :number) {
//         this.area = this.hight * this.wieght
//     }
//     getWieght(): number {
//         return this.wieght
//     }
//     getHieght(): number {
//         return this.hight
//     }
//     getArea(): number {
//         return this.area
//     }
// }
// let ract = new Ractangle()
// ract.setHight(10);
// ract.setWieght(10);
// ract.setArea(100);
var Rangtangle = /** @class */ (function () {
    function Rangtangle(width, height) {
        this.width = width;
        this.height = height;
        this.area = this.width * this.height;
    }
    Rangtangle.prototype.setWidth = function (width) {
        this.width = width;
    };
    Rangtangle.prototype.setHeight = function (height) {
        this.height = height;
    };
    Rangtangle.prototype.getArea = function () {
        this.area = this.width * this.height;
        return this.area;
    };
    return Rangtangle;
}());
var smallRaktangle = new Rangtangle(4, 8);
smallRaktangle.setWidth(50);
console.log(smallRaktangle.getArea());
