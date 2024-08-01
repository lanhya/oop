import { Person } from "./Person";
export class Teacher extends Person implements SkilledResource{
    private skills:string[]
    constructor(id:string, age:string, skills:string[]){
        super(id, age)
        this.skills = skills
    }
    getSkills():string[]{
        return null
    }
}