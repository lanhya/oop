import { Person } from "./Person";

let ronan = new Person("ronan");
let rady = new Person("rady");
let rith = new Person("rith");

ronan.addChild(rady); // RONAN  has 2 children : RADY and RITH
ronan.addChild(rith); // RONAN  has 2 children : RADY and RITH

rady.addChild(ronan); // RADY has 1 child :  RONAN

// Print the tree from RONAN
ronan.printTree("");
