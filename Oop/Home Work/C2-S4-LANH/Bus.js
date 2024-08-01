"use strict";
exports.__esModule = true;
exports.Bus = void 0;
var Bus = /** @class */ (function () {
    function Bus(name) {
        this.customer = [];
        this.address = [];
        this.name = name;
    }
    Bus.prototype.addCustomer = function (cus) {
        this.customer.push(cus);
    };
    Bus.prototype.addAddress = function (addr) {
        this.address.push(addr);
    };
    return Bus;
}());
exports.Bus = Bus;
