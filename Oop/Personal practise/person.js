"use strict";
exports.__esModule = true;
var plan_1 = require("./plan");
var Person = /** @class */ (function () {
    function Person(first_name, last_name) {
        this.plans = [];
        this.works = [];
        this.first_name = first_name;
        this.last_name = last_name;
    }
    Person.prototype.createPlan = function (plan) {
        this.plans.push(plan);
    };
    Person.prototype.reviewPlan = function () {
        return this.plans;
    };
    Person.prototype.stateWork = function (work) {
        this.works.push(work);
    };
    return Person;
}());
var lanh_phalla = new Person('lanh', 'phalla');
var study = new plan_1.Plan('Program', '5 year');
console.log('-->', lanh_phalla);
