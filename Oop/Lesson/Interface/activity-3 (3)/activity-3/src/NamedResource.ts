interface NameedResource {
    getName():string
}


// abstract class Resource {
//     private id:string;
//     constructor(id:string) {
//         this.id = id;
//     }
// }

// interface NamedResource{

//     getName():string;
// }
// interface SkilledResource{
//     getSkills():string[];
// }

// class Person extends Resource implements NamedResource{
//     private age:string;
//     constructor(id:string, age:string){
//         super(id)
// ;
//         this.age = age
//     }
//     getName(){
//         return null;
//     }
// }

// class Teacher extends Person implements SkilledResource{
//     private skills: string[];
//     constructor(id:string,age:string, skills:string[]){
//         super(id,age);
//         this.skills = skills
//     }
//     getSkills(){
//         return null;
//     }
    
// }