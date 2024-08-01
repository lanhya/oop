import { NameResource } from "../NamedResource";

export abstract class Person implements NameResource {
  constructor(protected name: string) {}

  getName(): string {
    return this.getName();
  }
}
