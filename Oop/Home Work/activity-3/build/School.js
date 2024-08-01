"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = void 0;
var School = /** @class */ (function () {
    function School(city) {
        this.student = [];
        this.city = city;
    }
    School.prototype.addStudent = function (stu) {
        this.student.push(stu);
    };
    School.prototype.addDirector = function (director) {
        this.director = director;
    };
    return School;
}());
exports.School = School;
//# sourceMappingURL=School.js.map