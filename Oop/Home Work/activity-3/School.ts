import { Director } from "./Director";
import { Student } from "./Student";
export class School {
  city: string;
  director?:Director;
  student:Student[] = [];
  constructor(city: string) {
    this.city = city;
  } 
  addStudent(stu: Student) {
    this.student.push(stu)
  }
  addDirector(director: Director) {
    this.director = director;
  }
}