//methid chaining 

let name = "        sujith      "
console.log(name);
console.log(name.toUpperCase().trim());
console.log(name.toUpperCase().trim().length);

class Bank{
    constructor(amount){this.amount = amount}
    deposit(value){
        this.amount = value + this.amount
        return this
    }
    withdraw(value){
        this.amount =  this.amount - value
        return this
    }
    showbal(){
        return `the total amount is ${this.amount}`
    }
}

let am = new Bank(200)
let money = 
am.deposit(500)
    .deposit(200)
    .withdraw(500)
    .showbal()
console.log(money);

class World {
    hello(){
        console.log("hello");
        return this
    }
    word(){
        console.log("World");
        return this
    }
}
let wr = new World
wr.hello().word().hello().word()

