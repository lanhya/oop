abstract class Teacher {
    protected name:string;
    protected age:number
    constructor(name:string, age:number){
        this.name =name
        this.age = age
    }
    abstract role():void;
}
class Student extends Teacher{
    private score:number
    constructor(name:string, age:number, score:number){
        super(name, age)
        this.score = score
    }
    role(){
        let score = 100;
        return score;
    }
}