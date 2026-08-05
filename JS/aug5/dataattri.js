// let box = document.getElementById("box")
// box.dataset.name="Sujith Kumar"
// box.dataset.school="Aditya college"
// box.removeAttribute("data-school")
// console.log(box.dataset);

// let lap = document.getElementById("lap")
// function Laptop(){
//     console.log(this.lap.dataset.price)
//     console.log(this.lap.dataset.id)
// }


// JSON 

// let text = {"name":"sujith","age":"55"}
// let cont = JSON.parse(text)
// console.log(cont)

let user = {
    name : "sujith",
    age : 22
}

let str = JSON.stringify(user)
console.log(str)

// enum

let maybe = Object.freeze({
    name : "Sujith",
    color : "Greeen"
})
maybe.name = "Kumar"
console.log(maybe.name)

console.log(Symbol("Sujith") == Symbol("Sujith"))

function enums(names){
    let obj = {}
    names.forEach((name,index) => {
        obj[name] = index
    });
    return Object.freeze(obj)
}

let days = enums(["monday","tuesday","wednesday"])
console.log(days.tuesday)
console.log(days);
