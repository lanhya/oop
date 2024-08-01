class Student {
    scoreInEnglish: number;
    scoreInMath: number;

    constructor(scoreInEnglish: number, scoreInMath: number) {
        this.scoreInEnglish = scoreInEnglish;
        this.scoreInMath = scoreInMath;
    }
    compute(): number {
        return (this.scoreInEnglish + this.scoreInMath) / 2;

    }                                                                                                                                                                                                                                   
}
let student = new Student(40, 60);
console.log(student.compute());
