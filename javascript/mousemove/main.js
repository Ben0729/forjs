let thisDiv = document.getElementsByTagName("div")[0];
let thisH1 = document.getElementsByTagName("h1")[0];
let thisP = document.getElementsByTagName("p")[0];



function mouseIn(){
    thisH1.innerHTML = "你進來了"; 

}

function mouseOut(){
    thisH1.innerHTML = "你出去了";
}

function mouseMove(e){
    thisP.innerHTML = "你所在的位置" + e.clientX + "," + e.clientY;
}

// thisDiv.addEventListener("mouseover",mousein);

// thisDiv.onmouseover = mousein;


this.onmouseover = function(){
    mouseIn();
}


this.addEventListener("mouseout",mouseOut);
thisDiv.addEventListener("mousemove",mouseMove);