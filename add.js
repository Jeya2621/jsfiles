var a = 10;
var b = 20;
var c = a+b;
console.log("Result : "+c);

let grade = 50;
if(grade >= 50){
    console.log("Pass");
}
else{
    console.log("Fail");
}

var username = "admin";
var password = "pass123";
var len = password.length;
if(username == "admin" && password.length >= 7){
    console.log("Valid User");
}
else{
    console.log("Invalid User");
}

console.log(username.toLocaleUpperCase());

let num = "24";
let age = parseInt(num);
console.log(num);

let cabTypes = ["micro", "mini", "prime"];
console.log(cabTypes);
for(let type of cabTypes){
    console.log(type);
}

console.log("No. of Cab Types",cabTypes.length);
console.log("Contains ",cabTypes.includes("small"));

function add(m,n){
    let o = m+n;
    return o;
}
let result = add(10,20)
console.log(result);






