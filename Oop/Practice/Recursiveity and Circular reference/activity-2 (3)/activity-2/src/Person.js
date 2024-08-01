"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name) {
        this.children = [];
        this.name = name;
    }
    Person.prototype.addChild = function (child) {
        this.children.push(child);
    };
    Person.prototype.printTree = function (space) {
        console.log(space + this.name);
        space += "\t";
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.printTree(space);
        }
    };
    return Person;
}());
exports.Person = Person;
