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



class Rangtangle {
    private width : number;
    private height : number;
    private area : number;
    constructor (width : number,height : number) {
        this.width = width;
        this.height = height;
        this.area = this.width * this.height;
    }
    setWidth(width : number) {
        this.width = width;
    }
    setHeight(height : number) {
        this.height = height;
    }
    getArea() : number {
        this.area = this.width * this.height;
        return this.area;
    }
}
let smallRaktangle = new Rangtangle(4,8);
smallRaktangle.setWidth(50);
console.log(smallRaktangle.getArea());