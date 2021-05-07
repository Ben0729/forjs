let thisH1=document.getElementsByTagName("h1")[1]
let thisP=document.getElementsByTagName("p")[0]
let thisDiv=document.getElementsByTagName("div")[0]


thisDiv.addEventListener("mousemove",function(e){
    
    console.log(e.clientX+","+e.clientY)
    thisP.innerHTML = "你現在的座標位置為"+e.clientX+","+e.clientY;
    // thisP.innerHTML("x軸:"+e.movementX.toString()＋"y軸:"+)
})

thisDiv.addEventListener("mouseleave",function(){
    thisH1.innerHTML="你出去了";
})
thisDiv.addEventListener("mouseenter",function(){
    thisH1.innerHTML="你進來了";
})
