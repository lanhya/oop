"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
var ronan = new Person_1.Person("ronan");
var rady = new Person_1.Person("rady");
var rith = new Person_1.Person("rith");
var him = new Person_1.Person("him");
ronan.addChild(rady); // RONAN  has 2 children : RADY and RITH
ronan.addChild(rith);
rady.addChild(him); // RADY has 1 child :  HIM
// Print the tree from RONAN
ronan.printTree("-");
