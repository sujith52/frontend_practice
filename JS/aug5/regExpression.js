let reg = /cat/

let secen = `the cat was sleeping in the room !`
console.log(reg.test(secen))

let animal = `dog`
let reg1 = new RegExp(animal)
let text = `a hunter took a dog along with him to forest !`
console.log(reg1.test(text))

let para = `cat cat cat cat CAT CAT CAT Cat`
console.log(para.match(/cat/g))
console.log(para.match(/cat/i))

console.log(reg.exec("i am having a cat"))

let des = `cat dog fish`
console.log(des.match(/dog/))
console.log(des.replace(/fish/,"whale"))
