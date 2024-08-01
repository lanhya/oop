import {Door} from "./Door";

export class Room {
  name: string;
  door: Door[] = [];
  constructor(name: string) {
    this.name = name;
  }
}
