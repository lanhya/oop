"use strict";
exports.__esModule = true;
exports.Trip = void 0;
var Trip = /** @class */ (function () {
    function Trip(name) {
        this.bus = [];
        this.name = name;
    }
    Trip.prototype.addBus = function (bus) {
        this.bus.push(bus);
    };
    return Trip;
}());
exports.Trip = Trip;
