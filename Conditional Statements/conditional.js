let mode="silver";
let color;
 
if(mode==="dark"){
    color="black";
}
else if(mode==="blue"){
    color="blue";
}
else if(mode==="pink"){
    color="pink";
}
else{
    color="white";
}
console.log(color);

//ternary

let age=prompt("Enter age");
age>=18 ? console.log("adult") : console.log("not adult");


