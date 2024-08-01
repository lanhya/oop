class BankAccount{
    name: string;
    amount: number;
    constructor(name: string, amount?: number) {
        this.name = name;
        this.amount = amount;
    }
    canByComputer(): boolean{
        return this.amount > 3000;
    }

}

let lanh = new BankAccount('Lanh');
let phalla = new BankAccount('Phalla', 4000);
// console.log('My bank', lanh.canByComputer(), phalla.canByComputer());

class House {
    tree: Tree[] = [];
    name: string;
    room: Room[] = [];
    door: Door[] = [];
    constructor(name: string) {
        this.name = name
    }

    addTree(tree: Tree){
         this.tree.push(tree);
    }

    addRoom(room: Room) {
        this.room.push(room);
    }

    addDoor(door: Door) {
        this.door.push(door);
    }
}

class Tree {
    color: string;
    size: number;
    constructor(color: string, size: number) {
        this.color = color;
        this.size = size;
    }
}

class Door {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Room {
    name: string;
    door: Door[] = [];
    constructor(name: string) {
        this.name = name;
    }

    addDoor(door: Door) {
        this.door.push(door);
    }
}


let pncHouse = new House('PNC House');
let treA = new Tree("Green", 40);
pncHouse.addTree(treA);
let doorA = new Door('Door A');
let doorB = new Door('Door B'); 
let roomA = new Room('Room A');
pncHouse.addDoor(doorA);
pncHouse.addDoor(doorB);
pncHouse.addRoom(roomA);
// console.log('House', pncHouse);


// Activity 3



// class Bank {
//     name: string;
//     atm: Atm[] = [];
//     bills: Bills[];
//     constructor(name: string) {
//         this.name = name;
//     }

//     getAtm() {
//         return this.atm;
//     }
//     getBills() {
//         return this.bills;
//     }

//     addAtm(atm: Atm) {
//         this.atm.push(atm);
//     }
//     addBills(bill: Bills) {
//         this.bills.push(bill);
//     }
// }

// class Atm {
//     address: string;
//     constructor(address: string) {
//         this.address = address;
//     }
// }

// class Bills {
//     value: number;
//     currency: string;
//     constructor(value: number, currency: string) {
//         this.value = value;
//         this.currency = currency;
//     }
// }

// interface Info {
//     name: string;
// }

// class Schools {
//     name: string;
// }

