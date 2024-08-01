import { Door } from "./Door";
import { Room } from "./Room";

export class House {
  name: string;
  rooms: Room[] = [];
  door: Door[] = [];
  constructor(name: string) {
    this.name = name;
  }
}
