// function personPhoto(firstname, lastname, age, eyecolor){
//     this.firstname=firstname;
//     this.lastname=lastname;
//     this.age=age;
//     this.eyecolor=eyecolor;
//     this.smile=function(){
//         document.write("😂");
//     }
// }
// let test = personPhoto("Chen","Ben",25,"Black");

// console.log(setTimeout(10))

let btn = document.getElementById("btn");
let thisInput = document.getElementById("userinsert");
let thisP = document.getElementById("hint")
let thisDiv = document.getElementById("timer"); 
let count = 30;

let ramnum=Math.floor(Math.random()*100)+1

let dt = setInterval(minus1,1000);
btn.addEventListener("click",afterclick)
    
function afterclick(){
    let inputnum=parseInt(thisInput.value);
    
        if(inputnum == ramnum){
            thisP.innerHTML="恭喜你猜對了";
            clearInterval(dt);
        }else if(inputnum > ramnum){
            thisP.innerHTML="小一些";
        }else if(inputnum < ramnum){
            thisP.innerHTML="大一些";
        }
    
}

function minus1(){
    count--;
    thisDiv.innerHTML=count;
    if(count==0){
        thisP.innerHTML="Game over!";
        clearInterval(dt);
    }

    if(thisP.innerHTML == "Game over!"){
        btn.disabled=true;
    }
}


// let i
// setInterval(del(),1000)
// function del(e){
//     i=e
//     if(i>0){
//         i--
//     }
// }

// function(){
//     let i =10
//     let us = 
// for(){}


// }