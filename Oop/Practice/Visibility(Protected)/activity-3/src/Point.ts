export class Point {
  protected x: number;
  protected y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  } 
  /**
   * @returns information about the point
   */
  getInfo(): string {
    return "position x=" + this.x + " y=" + this.y;
  }
}