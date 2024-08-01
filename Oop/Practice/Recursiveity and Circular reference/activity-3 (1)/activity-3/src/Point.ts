export class Point {
  private x: string;
  private y: string;

  constructor(x: string, y: string) {
    this.x = x;
    this.y = y;
  }
  // isEqual(xY:Point) {
  //   return this.x === xY.x && this.y === xY.y;
  // }
  public isEqual(other: Point): boolean {
    return this.x === other.x && this.y === other.y;
    
  }
}
