import { Calendar } from "./calendar";
import { Classroom, School, Student } from "./EXERCICE2-CODE";
import { Person } from "./Person";

let name = new Person("Lanh", 1998);
let currentYear = new Calendar(2021);
console.log(name.getName);


//school

let studentA = new Student("Now", "D");
let studentB = new Student("Pon", "D");
let studentC = new Student("Dana", "D");
let studentD = new Student("Nini", "D");

let classA = new Classroom("WEB", "PNC");
let classB = new Classroom("SNA", "PNC");

let schoolA = new School("PNC", "WEB");
let schoolB = new School("PNC", "SNA");