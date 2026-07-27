// console.log("comparison operators");

// async (a,b) => {console.log(a == b)}

// test(0,0)

animal = 'cat'
switch(animal){
    case 'dog':
         console.log("it is a dog");
    default:
         console.log("it is ok right !");
}

a=8
var main = a == 1 ? 'this is good' : 'very bad '
console.log(main);

const animalsays = {
    dog(){
        return `wooff`
    },

    cat(){
        return `meoww`
    },

    default(){
        return `hello`
    }
}

let speek = animalsays['dog']
console.log(speek);
