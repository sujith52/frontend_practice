console.log("The strings will be given here !");

var name = 'Sujith kumar'
var nas = "hi"
var nmased = `hello sujith`

console.log(name+'  '+nas+'  '+nmased);

var inString = String(true)
console.log(inString);
console.log(typeof(inString));

let isint = String(45)
console.log(isint);

var intString = (4586).toString();
console.log(intString);

var isObj = (class News{}).toString();
console.log(isObj);

var objString = new String("This will be the new objects that existed !")
console.log(objString);
console.log(objString);

var a = 'foo'
var b = 'bar'
console.log(a+b);
console.log(a+" "+b);


console.log(a.concat(b));
console.log("a".concat("b","","c"));

var name = "sujith"
var age = 22
var ismarr = false

console.log(name+age+ismarr);


var place = `World`
var greet = `Hello ${place}`
console.log(greet);

var pls = String.raw`a\\b is everthing`
console.log(pls);

function reverse(strs){
    return [...String(strs)].reverse().join('');
}

console.log(reverse('Sujith'));
console.log(reverse(562));
console.log(reverse([5,8,9]));

var a = 'hello'
var b = 'world'
console.log(a.localeCompare(b));

let arr = ['bananas','watermelons','apples','strawwberrys']
let bye  = arr.sort(function(a,b){
    return a.localeCompare(b)
})

console.log(bye);

let name = `sujith`
console.log(name[4]);
console.log(name.charCodeAt(4));
console.log(name.charAt(5));

var names = 'L\' the string has a new char'
console.log(names);

let spaces = "      some Whote Spaces bros  ".trim()
console.log(spaces);

var s = "one, 2, 3, 4, 5"
var m = s.split(",");
console.log(m);
var join = s.split(",").join("-*-")
console.log(join);


var sli = '8963456896.2'
console.log(sli.slice(0,5));
console.log(sli.slice(5));
console.log(sli.slice(5,8));


var charCode = "u".charCodeAt()
console.log(charCode);
var charCode = "ABCD".charCodeAt(3)
console.log(charCode);

var b10 = 12
var b16 = b10.toString(16)
console.log(b16);

var name = `sujith`
console.log(name.indexOf("j"));
console.log(name.indexOf("k"));

console.log(name.lastIndexOf("h"));
console.log(name.lastIndexOf("kumar"));

console.log(name.includes("jit"));
console.log(name.includes("kumar"));

rp = name.replace("h","kumar")
console.log(rp);


namesed = 'sujith'.indexOf('th')
console.log(namesed);

console.log('sujith'.toUpperCase());
console.log('Sujith'.toLowerCase());
console.log('suji-'.repeat(4));
