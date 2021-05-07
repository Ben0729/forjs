

let confirmAnswer = confirm("是否取消服務");
let p1=document.getElementsByTagName("p")[0]
if(confirmAnswer){
    document.getElementsByTagName("p")[0].innerHTML="已協助取消服務";
}else{
    p1.innerHTML = "服務繼續";
}