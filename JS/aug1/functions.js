

console.log("The javascript functions ");

var funct = l => w=> h=> l * w* h
console.log(funct(5)(5)(6));

(function(){console.log("this will be get alerted ")}());
// (function(){alert("this will be get alerted ")}());

(()=> console.log("This will be the arrow function"))();

let foo = function bar (){}
console.log(foo.name);

// binding function in the javascript 
let user = {
    name : 'sujith',
    greet(){
        console.log(`The name of the host was ${this.name}`)
    }
}

let getBindMethod = user.greet.bind(user)
getBindMethod()

user.greet()

let greeting = user.greet()

function main(person, ...msg){
    msg.forEach(map => {
        console.log(`${name} message is : ${map}`)
    })
}

main('sujith','hello world ','and have a great day ','in a different universe !')

var fool = function(){
    console.log("this anonomoys function !")
}
fool()

function printMsg(msg="the defaultmessage that printed "){
    console.log(msg)
}

printMsg()
printMsg('this will be the different message !')
printMsg(undefined)

