var bankaccount = /** @class */ (function () {
    function bankaccount(accountbalance) {
        this.accountBalance = accountbalance;
    }
    bankaccount.prototype.credit = function (amount) {
        if (amount > 0) {
            this.accountBalance += amount;
            console.log("Creadit sucessfully get into new account and your balance is:" + this.accountBalance);
        }
        else {
            console.log("creadit unsucessfull");
        }
    };
    bankaccount.prototype.debit = function (amount) {
        if (amount > 0 && amount < this.accountBalance) {
            this.accountBalance -= amount;
            console.log("debit successfully share in new account balance:" + this.accountBalance);
        }
        else {
            console.log("debit unseccessfully");
        }
    };
    return bankaccount;
}());
var customer = /** @class */ (function () {
    function customer(firstname, lastname, age, gender, mobile_number, bankaccount) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
        this.mobile_number = mobile_number;
        this.bankaccount = bankaccount;
    }
    customer.prototype.display = function () {
        console.log("name: " + this.firstname + " " + this.lastname);
        console.log("Age: " + this.age);
        console.log("gender: " + this.gender);
        console.log("mobile_number: " + this.mobile_number);
        console.log("amount in bank: " + this.bankaccount);
    };
    return customer;
}());
var a1 = new bankaccount(5000);
var c1 = new customer("roshni", "mahesh", 22, "female", 6555777, a1);
c1.display();
c1.bankaccount.debit(200);
console.log();
