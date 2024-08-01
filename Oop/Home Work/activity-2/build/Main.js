"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var House_1 = require("./House");
var Door_1 = require("./Door");
var Room_1 = require("./Room");
// TODO  :
//  1- Create:
// 1 house
var h = new House_1.House("Lanh");
// 3 doors
var redDoor = new Door_1.Door('red');
var brownDoor = new Door_1.Door('brown');
var yellowDoor = new Door_1.Door("yellow");
//2 room
var roomA = new Room_1.Room("Bath Room");
var roomB = new Room_1.Room("Bed Room");
// 2- Add the 2 rooms to the house
h.rooms.push(roomA, roomB);
// 3 – Add a door to the house and rooms
h.door.push(redDoor);
roomA.door.push(redDoor);
roomB.door.push(brownDoor);
//# sourceMappingURL=Main.js.map