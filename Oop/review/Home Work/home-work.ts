export class Schol{
    student: Student[] = [];
    director?: Director;

    getStudet(){
        return this.student.length;
    }
    getDirector() {
        return this.director;
    }

    addStudent(student: Student) {
        this.student.push(student);
    }

    addDirector(director: Director) {
        this.director = director;
    }

}

export class Student{
    name: string;
    constructor(name: string) {
        this.name = name;
    }

}

export class Director{
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

let pnc = new Schol();

let studentA = new Student('Tevy');
let studentB = new Student('Sopan');
let studentC = new Student('Sok');
let studentD = new Student('Bun');
let studentE = new Student('Bora');
let studentF = new Student('Sary');
// Director 
let director = new Director('Noemie');
// Add students and director to school
pnc.addStudent(studentA);
pnc.addStudent(studentB);
pnc.addStudent(studentC);
pnc.addStudent(studentD);
pnc.addStudent(studentE);
pnc.addStudent(studentF);
pnc.addDirector(director);

console.log('PNC School has students==> ', pnc.getStudet());