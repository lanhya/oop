"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.feedbacks = [];
        this.name = name;
        this.price = price;
    }
    Product.prototype.addFeedback = function (feedbacks) {
        for (var _i = 0, feedbacks_1 = feedbacks; _i < feedbacks_1.length; _i++) {
            var feedback = feedbacks_1[_i];
            this.feedbacks.push(feedback);
        }
    };
    return Product;
}());
exports.Product = Product;
