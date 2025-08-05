console.log("hello");
console.error("error");
console.warn("warning")
console.table({fname:"surya",age:18});

//scope
//var,let,const
//var
if(1)
{
    var msg="message";
    console.log(msg);

}
console.log(msg);  //var  works also outside the braces 

//let
if(1)
{
    
    let msg = "message";
    console.log(msg);

}
//console.log(msg);  let does not work outside the braces.it shows error

//const
if(1)
{
    
    const msg = "message";
    console.log(msg);

}
//console.log(msg);  const also  does not work outside the braces.it shows error
