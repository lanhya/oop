abstract class Drink {
    protected name: string
    protected price: number
    constructor(name: string, price:number){
        this.name = name
        this.price = price
    }

}
class Coffe extends Drink {
    private quantity:number
    constructor(name:string, price: number, quantity:number) {
        super(name, price)
        this.quantity  = quantity
    }
}
class OrangeJuice extends Drink {
    private numberJuice:number
    constructor(name:string, price:number, numberJusice:number) {
        super(name, price)
        this.numberJuice = numberJusice

    }
}

let banana = new Coffe('banbana', 1000, 10);
console.log(banana);