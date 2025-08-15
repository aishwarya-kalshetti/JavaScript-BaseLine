let btn1=document.querySelector("#btn1");
// btn1.onclick=()=>{
//     console.log("btn1 was clicked");
//     let a=25;
//     a++;
//     console.log(a);
// }

// btn1.onclick=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
    
    
// ;}
btn1.addEventListener("click", ()=>{
    console.log("button 1 was clicked- handler 1");
});

btn1.addEventListener("click", ()=>{
    console.log("button 1 was clicked- handler 2");
});

btn1.addEventListener("click", ()=>{
    console.log("button 1 was clicked- handler 3");
});



const handler=()=>{
    console.log("button 1 was clicked- handler 4");
}
btn1.addEventListener("click",handler);

btn1.removeEventListener("click",handler);



let div=document.querySelector("div");
div.onmouseover=(evt)=>{
//     console.log("You are inside div");
console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
};

//toggle button

let Mode=document.querySelector("#Mode");
let currMode="light";
Mode.addEventListener("click",()=>{
    if(currMode=="light"){
        currMode="dark";
        // document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").classList.add("dark");
    }
    else{
        currMode="light";
        // document.querySelector("body").style.backgroundColor="white";
        document.querySelector("body").classList.add("light");
    }

    console.log(currMode);
    
});
