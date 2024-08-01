import { House } from "./House";
import { Door } from "./Door";
import { Room } from "./Room";

// TODO  :
//  1- Create:

// 1 house
let h = new House("Lanh");
// 3 doors
let redDoor = new Door('red');
let brownDoor = new Door('brown');
let yellowDoor = new Door("yellow");
//2 room
let roomA = new Room("Bath Room");
let roomB = new Room("Bed Room");

// 2- Add the 2 rooms to the house
h.rooms.push(roomA, roomB);
// 3 – Add a door to the house and rooms
h.door.push(redDoor);
roomA.door.push(redDoor);
roomB.door.push(brownDoor);