let myClass=document.querySelector(".myClass");
console.log(myClass.innerText);
console.dir(myClass.innerHTML);


let h2=document.querySelector(".h2");
console.h2(h2.innerText);

h2.innerText=h2.innerText+"From AK";

let box=document.querySelector(".box");
box[0].innerText="new unique val 1";
box[1].innerText="new unique val 2";

console.log(box.getAttribute("box","class"));

let div=document.querySelector("myClass");
myClass.style.background="green";
myClass.style.fontsize="26px";
myClass.innerText="Hello";

let newBtn=document.createElement("button");
newBtn.innerText="click me!";
console.log(newBtn);

let boxs=document.querySelector(".box");
boxs.append(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML="<i> Hi, I am New! </i>";
document.querySelector("body").prepend(newHeading);

