
type BankAccount = {
  balance: number;
  name: string;
};

function credit(account: BankAccount, valueDollars: number) {

  let balance = account.balance + valueDollars;
  return balance;
}


function debit(account: BankAccount, valueDollars: number) {
  let balance = account.balance - valueDollars;
  return balance;
 
}

// ----------------------------------
//	TEST ZONE
// ----------------------------------

let thonAccount: BankAccount;
thonAccount = {balance: 0, name:"thon py"};

console.log(thonAccount.name + ", your account balance is" + thonAccount.balance);

credit(thonAccount, 400);

console.log(thonAccount.name + ", your account balance is" + thonAccount.balance);