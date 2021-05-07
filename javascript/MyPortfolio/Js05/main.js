let btn=document.getElementsByTagName("button")[0]

btn.onclick=function(){
    let rannum=Math.floor(Math.random()*4)
    
    let choice = document.getElementsByTagName("li")[rannum].innerHTML

    document.getElementsByTagName("h1")[0].innerHTML=choice

    
     
}
