let promp = prompt("小明家有三個小孩，他兩個哥哥叫張一、張二，第三個小孩叫什麼");
let thish3 = document.getElementsByTagName("h3")[0]
let btn1 = document.getElementById("btn1")
console.log(btn1)
switch(promp){
    case "小明":
        document.getElementsByTagName("h3")[0].innerHTML="答對了";
        break;
    default :
        document.getElementsByTagName("h3")[0].innerHTML="再想一想";
        break;
}



btn1.onclick = function(){
    thish3.innerHTML="Hello!";
}