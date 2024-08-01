"use strict";
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.setFirstname = function (fname) {
        this.firstname = fname;
    };
    Student.prototype.setLastname = function (lname) {
        this.lastname = lname;
    };
    Student.prototype.setAge = function (age) {
        this.age = age;
    };
    Student.prototype.getFirstname = function () {
        return this.firstname;
    };
    Student.prototype.getLastname = function () {
        return this.lastname;
    };
    Student.prototype.getAge = function () {
        return this.age;
    };
    return Student;
}());
var ob = new Student();
ob.setFirstname("Sok");
ob.setLastname("Seyha");
ob.setAge(20);
console.log(ob.getFirstname());
console.log(ob.getLastname());
