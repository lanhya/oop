"use strict";
exports.__esModule = true;
exports.Store = void 0;
var Store = /** @class */ (function () {
    function Store(name) {
        this.products = [];
        this.customers = [];
        this.name = name;
    }
    Store.prototype.addProduct = function (products) {
        for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
            var product = products_1[_i];
            this.products.push(product);
        }
    };
    Store.prototype.addCustomer = function (customers) {
        for (var _i = 0, customers_1 = customers; _i < customers_1.length; _i++) {
            var customer = customers_1[_i];
            this.customers.push(customer);
        }
    };
    Store.prototype.getProductLessThan = function (price) {
        var allProducts = [];
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var pro = _a[_i];
            var producPrice = pro.price;
            if (producPrice < price) {
                allProducts.push(pro);
            }
        }
        return allProducts;
    };
    Store.prototype.getFeedbackCOntaining = function (keywork) {
        var listOfFeedback = [];
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var proFeed = _a[_i];
            var proFeeds = proFeed.feedbacks;
            for (var _b = 0, proFeeds_1 = proFeeds; _b < proFeeds_1.length; _b++) {
                var feedback = proFeeds_1[_b];
                var getFeed = feedback.comment;
                if (getFeed == keywork) {
                    listOfFeedback.push(feedback);
                }
            }
        }
        return listOfFeedback;
    };
    Store.prototype.getCustomerComments = function (customer) {
        var listOfComments = [];
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var product = _a[_i];
            var feedback = product.feedbacks;
            for (var _b = 0, feedback_1 = feedback; _b < feedback_1.length; _b++) {
                var comment = feedback_1[_b];
                if (comment.author.firstname === customer.firstname && comment.author.lastname === customer.lastname) {
                    listOfComments.push(comment.comment);
                }
            }
        }
        return listOfComments;
    };
    return Store;
}());
exports.Store = Store;
