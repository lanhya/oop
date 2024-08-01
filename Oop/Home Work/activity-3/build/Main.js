"use strict";
// TODO  :
Object.defineProperty(exports, "__esModule", { value: true });
var Director_1 = require("./Director");
var School_1 = require("./School");
var Student_1 = require("./Student");
//  1- UPdate the classes to mange
//          - a schoo has many students
//          - as school has 1 director
// 2 - Create a school with a director, and students
//Create School
var school = new School_1.School("PNC");
//Create Director
var director = new Director_1.Director("AAA");
// Create students
var studentA = new Student_1.Student("a");
var studentB = new Student_1.Student("b");
var studentC = new Student_1.Student("c");
var studentD = new Student_1.Student("D");
school.addDirector(director);
school.addStudent(studentA);
school.addStudent(studentB);
school.addStudent(studentC);
school.addStudent(studentD);
console.log(school.student);
school.student.forEach(function (item) {
    console.log(item.name);
});
//# sourceMappingURL=Main.js.map