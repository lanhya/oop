class House {
  private chairs: Chair[] = [];

  /**
   * Add a chair of given ID
   * @param chairID the chair ID
   */
  public addChair(chairID: number) {
    // TODO YOUR CODE
    let newCha = this.chairs;
    for(let char of this.chairs) {
      newCha.push(char);
    }
    return newCha
  }
}

class Chair {
  constructor(private chairId: number, private house: House) {}
  setHose(hose: string) {
     this.house = newHouse;
  }
}

// MAIN
let newHouse = new House();
newHouse.addChair(45); // Add a chair of id 45
