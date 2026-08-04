console.log(`the inheritance concept in the world of javascripts`);

class Animal {
    eat(){
        console.log(`it can eat`)
    }
    sleep(){
        console.log(`it can sleep bro `)
    }
}

class Sujith extends Animal{}
let suji = new Sujith
suji.eat()
suji.sleep()


class Tree {
    // constructor(name){this.name = name}
    walk(){console.log(`do youthink tree can walk ?`)}
}

class plant extends Tree{
    constructor(name){
        super(name)
        this.name = name
    }
}

let cucumber = new plant('sujith')
console.log(cucumber.name)
cucumber.walk()

