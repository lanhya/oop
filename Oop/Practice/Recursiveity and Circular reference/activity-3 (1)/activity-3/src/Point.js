"use strict";
exports.__esModule = true;
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    // isEqual(xY:Point) {
    //   return this.x === xY.x && this.y === xY.y;
    // }
    Point.prototype.isEqual = function (other) {
        return this.x === other.x && this.y === other.y;
    };
    return Point;
}());
exports.Point = Point;
