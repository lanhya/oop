import { NameResource } from "../NamedResource";

export class Room implements NameResource {
  constructor(protected name: string) {}

  getName() {
    return this.name;
  }
}
