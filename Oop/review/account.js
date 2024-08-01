var Account = /** @class */ (function () {
    function Account(balance) {
        this.balance = 0;
        this.balance = balance;
    }
    Account.prototype.getBalance = function () {
        if (this.balance >= 0 && this.balance < 600) {
            return this.balance;
        }
        else
            return 'Please check you balance!';
    };
    return Account;
}());
var lanhAccount = new Account(300);
lanhAccount.balance = 100;
console.log('Get balance of Lanh account', lanhAccount.getBalance());
