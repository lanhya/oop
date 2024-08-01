import { NameResource } from "../NamedResource";
import { Material } from "./Material";

export class Computer extends Material implements NameResource {
  private name: string;

  constructor(id: number, computerName: string) {
    super(id);
    this.name = computerName;
  }

  getName(): string {
    return this.name;
  }
}
