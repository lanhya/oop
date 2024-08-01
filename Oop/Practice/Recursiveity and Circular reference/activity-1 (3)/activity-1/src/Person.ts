export class Person {
  private name: string;
  private children: Person[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public addChild(child: Person) {
    this.children.push(child);
  }

  public printTree(space: string) {
    console.log(space + this.name);

    space += "\t";
    for (let child of this.children) {
      child.printTree(space);
    }
  }
}
