import { Point } from "./Point";

export class ColoredPoint extends Point {
  constructor(x: number, y: number) {
    super(x, y);
  }

  /**
   * Depending on the point position:
   * - if x= 0 => green
   * - else if y= 0 => red
   * - else => yellow
   * @returns the color of the point
   */
  getColor(): string {
    // return "TODO";
    let color = "";
    if (this.x === 0) {
      color= "green"
    }else if(this.y === 0) {
      color =  "red"
    }else {
      color =  "yellow"
    }
    return color;
  }
}
