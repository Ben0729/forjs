

const thisH1c = document.getElementsByTagName("h1")[0].innerHTML;
//const是宣告常數

let thisH1 = document.getElementsByName("h1");
thisH1[0].innerHTML = "123";

let thisH1two = document.getElementsByName("h1")[1];
thisH1two.innerHTML = "456";

let personObj = {firstname:"Cheng",secondname:"Ben",age:25,eyecolor:"blue",smile:function(){document.write("欉三小")}};

window.onload =function(){
    personObj.smile();
}