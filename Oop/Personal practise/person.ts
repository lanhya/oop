import { Plan } from "./plan";
import { Work } from "./work";
class Person {
    plans: Plan[] = [];
    works: Work[] = [];
    first_name: string;
    last_name: string;
    constructor(first_name: string, last_name: string) {
        this.first_name = first_name
        this.last_name = last_name
    }

    createPlan(plan: Plan) {
        this.plans.push(plan);
    }

    reviewPlan() {
        return this.plans;
    }

    stateWork(work: Work) {
        this.works.push(work);
    }

}

const lanh_phalla = new Person('lanh', 'phalla');
const study = new Plan('Program', '5 year');
console.log('-->', lanh_phalla);