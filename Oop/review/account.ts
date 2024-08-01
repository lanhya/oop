class Account {
    private balance: number = 0;
    constructor(balance: number) {
        this.balance = balance;
    }

    credit(money: number) {
        if ( this.balance + money < 600) {
             this.balance += 500;
        }
    }

    debitBalance() {
        if (this.balance >= 0 && this.balance < 600) {
            return this.balance -= 500;
        }
        else return 'Please check you balance!';
    }


}

let lanhAccount = new Account(300);
// lanhAccount.balance = 100;
console.log('Get balance of Lanh account', lanhAccount.getBalance());

class Rectangle {
    private width: number;
    private height: number;
  
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  
     setWidth(width : number) {
       this.width = width;
     }
  
    getArea() {
      return this.width * this.height;
    }
  
  }
  let smallRectangle = new Rectangle(100, 200);
  smallRectangle.height = 50;
  console.log(smallRectangle.getArea());