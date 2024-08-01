var Student = /** @class */ (function () {
    function Student(scoreInEnglish, scoreInMath) {
        this.scoreInEnglish = scoreInEnglish;
        this.scoreInMath = scoreInMath;
    }
    Student.prototype.compute = function () {
        return (this.scoreInEnglish + this.scoreInMath) / 2;
    };
    return Student;
}());
var student1 = new Student(40, 60);
console.log(student1.compute());
