import { Commercial } from "./Position/Commercial";
import { ITDevelper } from "./Position/ITDeveloper";
import { Manager } from "./Position/Manager";
import { Salary } from "./salary";

export class Position{
    allCommerial: Commercial[] = [];
    allITDeveloper: ITDevelper[] = [];
    allManager: Manager[] = [];
    //add
    addCommercial(commercial:Commercial) {
        this.allCommerial.push(commercial);
    }
    addITDeveloper(itdeveloper:ITDevelper) {
        this.allITDeveloper.push(itdeveloper);
    }
    addManager(manager:Manager) {
        this.allManager.push(manager);
    }
    /**
     * Find in possion salary
     */
    findSalary(salarys:number): Salary[] {
        let result:Salary[] = []
        for(let salary of this.allCommerial) {
            if(salary.getSalary() === salarys){
                result.push(salary)
            }
        }
        for(let salary of this.allITDeveloper) {
            if(salary.getSalary() === salarys) {
                result.push(salary)
            }
        }
        for(let salary of this.allManager){
            if(salary.getSalary() === salarys) {
                result.push(salary)
            }
        }


        return result;
    }
    
}

//----------------------------
//TEST
let myposition = new Position();
myposition.addCommercial(new Commercial(2000));
myposition.addITDeveloper(new ITDevelper(3000));
myposition.addManager(new Manager(5000));
console.log(myposition);