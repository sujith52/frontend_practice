console.log("the prototype of the object !");

var Human = function (name){
    this.name = name
    this.canWalk = true
    this.canSpeak = true
}

Human.prototype.greet = function (){
    if(this.canSpeak){
        console.log(`Hi i am ${this.name}`);
    }
}

var sujith = new Human('sujith')
sujith.greet()

class Myclass {
    constructor(names){
        console.log(`this this is good ${names}`)
        this.names = names 
    }
}

let sky = new Myclass('sujith_kumar')

class Superclass {
    constructor(){
        this.logger = console.log
    }
    log(){
        this.logger(`hello from the ${this.name}`)
    }
}

class Main extends Superclass{
    constructor(){
        super()
        this.name = 'sujith kumar g'
    }
}

let main = new Main
main.log()


class Mass {
    static newmethos(){
        return `this will be good`
    }
}
console.log(Mass.newmethos());

