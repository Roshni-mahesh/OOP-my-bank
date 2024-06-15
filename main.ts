interface bankaccount{
    creadil (amount:number) : void;
    debit (amount:number) :void;
}

class bankaccount implements bankaccount{
    accountBalance : number;
    constructor (accountbalance:number) {
        this.accountBalance=accountbalance
    }

    public credit (amount : number) {
        if (amount>0){
            this.accountBalance+=amount
            console.log("Creadit sucessfully get into new account and your balance is:"+this.accountBalance)
            }
            else {
                console.log("creadit unsucessfull")
            }
    }
    public debit (amount: number) {
        if (amount>0 && amount <this.accountBalance){
            this.accountBalance-=amount
            console.log("debit successfully share in new account balance:"+this.accountBalance)
        }
        else {
            console.log("debit unseccessfully" )
        }
    }
        
}


class customer {
    firstname: string;
    lastname: string;
    age: number;
    gender: string;
    mobile_number: number;
    bankaccount: bankaccount;

    constructor(firstname: string, lastname: string, age: number, gender: string, mobile_number: number, bankaccount: bankaccount) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
        this.mobile_number = mobile_number;
        this.bankaccount = bankaccount;
    }

    public display() {
        console.log("name: " + this.firstname + " " + this.lastname);
        console.log("Age: " + this.age);
        console.log("gender: " + this.gender);
        console.log("mobile_number: " + this.mobile_number);
        console.log("amount in bank: " + this.bankaccount);
    }
}

const a1= new bankaccount(5000)
const c1 = new customer("roshni", "mahesh", 22, "female", 6555777, a1);
c1.display()
c1.bankaccount.debit(200)
console.log()




