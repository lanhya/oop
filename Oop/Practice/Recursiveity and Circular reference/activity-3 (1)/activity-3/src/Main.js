"use strict";
exports.__esModule = true;
var Point_1 = require("./Point");
var p1 = new Point_1.Point("Lanh", "La");
var p2 = new Point_1.Point("Lanh", "La");
var p3 = new Point_1.Point("Paha", "Pa");
console.log(p1.isEqual(p2)); // should be false
console.log(p1.isEqual(p2)); // should be true
console.log(p1.isEqual(p3)); // should be false
