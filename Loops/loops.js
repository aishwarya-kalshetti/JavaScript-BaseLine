//for
for(let i=0;i<5;i++){
    console.log("Hello World");
}

//while
let i=1;
while(i<=5){
    console.log("i",i);
}

//do while
do{
    console.log("i",i);
}while(i<=5);


//for-of Loop
let str="Tekdi Technologies";
let size=0;
for(let val of str){
    console.log(i);
    size++;

}
console.log("size",size);

//for-in Loop
let student={
    name:"Aishwarya",
    age:21,
    cgpa:9.54,
    isPass:true,
};
for(let i in student){
    console.log(i,student[i]);
}

//Guess the number

let gameNum=25;
let userNum=prompt("Guess");
while(userNum!=gameNum){
    userNum=prompt("Guess");
}
console.log("congratulations");