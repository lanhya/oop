import { Point } from "./Point";

let p1 = new Point("Lanh", "La");
let p2 = new Point("Lanh", "La");
let p3 = new Point("Paha", "Pa");

console.log(p1.isEqual(p2)); // should be false

console.log(p1.isEqual(p2)); // should be true

console.log(p1.isEqual(p3)); // should be false
