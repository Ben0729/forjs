let thisP1 = document.getElementsByClassName("recipro")[0];
let thisP2 = document.getElementsByTagName("p")[1];
let count = 60;
let mathh = (Math.floor(Math.random()*100)-1);


let timer  = setInterval(delet, 1000);

function delet(){

    count--;
    if(count == 0){
        thisP2.innerHTML = "GAME OVER"
        clearInterval(timer);
    }
}