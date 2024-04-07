class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}


const account1 = new BankAccount(2056, "Shahidul islam", 2000);
const account2 = new BankAccount(3056, "Jane Alam", 1000);


console.log("Initial Account Information:");
account1.displayAccountInfo();
account2.displayAccountInfo();

console.log("\nDeposit and Withdrawal:");
account1.deposit(200);
account1.withdraw(300);
account2.deposit(500);
account2.withdraw(1500); 

console.log("\nUpdated Account Information:");
account1.displayAccountInfo();
account2.displayAccountInfo();