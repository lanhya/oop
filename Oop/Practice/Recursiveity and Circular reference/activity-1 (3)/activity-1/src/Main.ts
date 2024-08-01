import { Person } from "./Person";

let ronan = new Person("ronan");
let rady = new Person("rady");
let rith = new Person("rith");
let him = new Person("him");

ronan.addChild(rady); // RONAN  has 2 children : RADY and RITH
ronan.addChild(rith);

rady.addChild(him); // RADY has 1 child :  HIM

// Print the tree from RONAN
ronan.printTree("-");
