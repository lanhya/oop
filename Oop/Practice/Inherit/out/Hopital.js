"use strict";
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
var Person = /** @class */ (function () {
    function Person(name, address, dateBirth) {
        this.name = name;
        this.address = address;
        this.dateBirth = dateBirth;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, address, dateBirth, salary) {
        var _this = _super.call(this, name, address, dateBirth) || this;
        _this.salary = salary;
        return _this;
    }
    return Employee;
}(Person));
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor(name, address, dateBirth, salary, medicalBranch) {
        var _this = _super.call(this, name, address, dateBirth, salary) || this;
        _this.medicalBranch = medicalBranch;
        return _this;
    }
    return Doctor;
}(Employee));
var Lorn = new Person('Lorn', 'PVH', '1770');
var LanhEmploy = new Employee('Lanh', 'PVH', '1998-09-06', 150);
var PhallaDoctor = new Doctor('Phalla', 'PVH', '1878-06-06', 500, 'UTMB');
console.log(Lorn);
console.log(LanhEmploy);
console.log(PhallaDoctor);
