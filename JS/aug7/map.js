let students = new Map([
    [1,`sujith`],
    [2,`sreejs`],
    [3,`lathasss`]
])

students.delete(3)
students.set(4,`vinithas`)
console.log(students)
students.clear()
console.log(typeof(students));
console.log(students.length)

console.log(students.delete(1));
console.log(students.has(3))
console.log(students.has(10))

for(let arr of students){
    console.log(`   ${arr}  `)
}

for(let [key,value] of students){
    console.log(`the id is : ${key} and the name is ${value}`)
}

for(let arr of students.keys()){
    console.log(`   ${arr}  `)
}

for(let arr of students.values()){
    console.log(`   ${arr}  `)
}

for(let arr of students.entries()){
    console.log(`   ${arr}  `)
}

students.set('name','sujith')
students.set('age',22)
students.set('home','madanapalle')
console.log(students.entries())

let prints = students
    .set('method','method chaining')
    .get('name')

console.log(prints)

console.log(students.get(2))
let user ={
    id : 1
}
students.set(user,'developer')
console.log(students.get(user))

function hello(){console.log(`hello world program in js `)}
students.set(hello,"function")
console.log(students.get(hello))

let arrays = [1,5,6,7,8,9]
students.set(arrays,"arrays")
console.log(students.get(arrays))

console.log(students.size)

let fruits = new Map([
    ['banana',50],['apple',60],['pineapple',60]
])
console.log(fruits.get('banana'))
console.log(fruits.has('apple'))

let studs = new Map([
    ['sujith',101],['latha',102],['sreejas',103],['vinitha',104]
])
studs.delete('vinitha')
console.log(studs)

for(let vals of studs.values()){
    console.log(vals)
}
for(let vals of studs.keys()){
    console.log(vals)
}

for(let [k,v] of studs){
    console.log(`Student Id : ${v} Name : ${k}`)
}

let student = {
    id : 101,
    name : "sujith"
}
let suji = new Map()
suji.set(student,"javascript developer")
console.log(suji.get(student))

let str = "javascript"
let chats = new Map()

for(let cha of str){
    chats.get(cha) ? chats.set(cha , chats.get(cha) + 1) : chats.set(cha, 1)
}

for (let [val, count] of chats){
    console.log(`${val} -> ${count}`)
}

const numbers = [2, 5, 2, 8, 5, 2, 9, 8, 10];
let main = new Map()

for(let values of numbers){
    main.get(values) ? main.set(values, main.get(values) + 1) : main.set(values,1)
}

for( let [k,val] of main){
    console.log(`${k} -> ${val}`)
}


let manage = new Map()
manage.set(101,"sujith")
manage.set(102,"sreejs")
manage.set(103,"lathas")

console.log(manage.get(101))
console.log('is the student 103 existed ', manage.has(103))
console.log('deleting the 103 student ', manage.delete(103));
console.log(manage.entries())
console.log(manage.size, ' the total numbers in the management ')
console.log('clearing all maps', manage.clear());
console.log(manage.entries())
