console.log("the seters and getters ");

class Person{
    constructor(first,last){
        this._first = first
        this._last = last
    }
    get fullname (){
        return `the name is : ${this._first} ${this._last}`
    }
    setname(firstname,lastname){
        this._first = firstname
        this._last = lastname
    }
    
}

let person = new Person
console.log(person.fullname);
person.setname('sujithkumar','hello')
console.log(person.fullname);


class BankAccount{
    constructor(balance){
        this._balance = balance
        // balance = 0
    }
    get balance(){
        return `the current balance is ${this._balance}`
    }

    set balance(newAmount){
        if(newAmount < 0){console.log(`the balance is cannot be negitive`)}
        else {this._balance = newAmount}
    }
}

let per1 = new BankAccount
console.log(per1.balance);
per1.balance = 500
console.log(per1.balance);
per1.balance = -100
console.log(per1.balance);
