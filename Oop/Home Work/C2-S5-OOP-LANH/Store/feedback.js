"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feedback = void 0;
var Feedback = /** @class */ (function () {
    function Feedback(comment, evaluate, author) {
        this.comment = comment;
        this.evaluate = evaluate;
        this.author = author;
    }
    Feedback.prototype.addCustomer = function (customer) {
        this.author = customer;
    };
    return Feedback;
}());
exports.Feedback = Feedback;
