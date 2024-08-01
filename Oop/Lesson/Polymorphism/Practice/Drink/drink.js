var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Drink = /** @class */ (function () {
    function Drink(name, price) {
    }
    return Drink;
}());
var Coffe = /** @class */ (function (_super) {
    __extends(Coffe, _super);
    function Coffe(name, price, quantity) {
        var _this = _super.call(this, name, price) || this;
        _this.quantity = quantity;
        return _this;
    }
    return Coffe;
}(Drink));
var OrangeJuice = /** @class */ (function (_super) {
    __extends(OrangeJuice, _super);
    function OrangeJuice(name, price, numberJusice) {
        var _this = _super.call(this, name, price) || this;
        _this.numberJuice = numberJusice;
        return _this;
    }
    return OrangeJuice;
}(Drink));
var banana = new Coffe('banbana', 1000, 10);
console.log(banana);
