// TODO  :

import { Director } from "./Director";
import { School } from "./School";
import { Student } from "./Student";

//  1- UPdate the classes to mange
//          - a schoo has many students
//          - as school has 1 director

// 2 - Create a school with a director, and students

//Create School
let school = new School("PNC");

//Create Director
let director = new Director("AAA");

// Create students
let studentA = new Student("a");
let studentB = new Student("b");
let studentC = new Student("c");
let studentD = new Student("D");

school.addDirector(director);
school.addStudent(studentA);
school.addStudent(studentB);
school.addStudent(studentC);
school.addStudent(studentD);
console.log(school.student);
school.student.forEach(item => {
    console.log(item.name)
})