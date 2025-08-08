//type conversion

//1.number to string

let a=123;
console.log(a,typeof a);
a=String(a);                  //we can also use a.toString();
console.log(typeof a);


//2.string to number

let b='123';
console.log(b,typeof b);
b=Number(b);
console.log(typeof b);

//PARSE

//parseInt and parseFloat

let c=33.33;
d=parseInt(c);
e=parseFloat(c);
console.log(d);
console.log(e);


//type coersion

let x=10;
let y="25";
console.log(x+y);


let p=10;
let q="25";
r=Number(q)
console.log(p+r);