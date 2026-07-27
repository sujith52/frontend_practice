// let len = ['one','sujith','sreejas','kumars '].map(value => value.length)
// console.log(len);

// let people = [
//     {
//         id : 1,
//         name : 'sujith',
//         age : 22
//     },
//     {
//         id : 2,
//         name : 'sreeja',
//         age : 50
//     },
//     {
//         id : 3,
//         name : 'latha',
//         age : 65
//     },
// ]

// let young = people.filter(values => values.age < 60)
// console.log(young);

let print = [1,5,6,3,2,1,4,8,9,10,'a','A','z'].sort()
console.log(print);

let numsort = ['monkey','zeebra','chicken','hen','dog'].sort((a,b)=> a.length - b.length)
console.log(numsort);

let maxsort = ['monkey','zeebra','chicken','hen','dog'].sort((a,b)=> b.length - a.length)
console.log(maxsort);


for(let i =0; i< 10;i++){
    console.log(i);
}