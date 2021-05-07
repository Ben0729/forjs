// window.onload = function(){
//     document.onclick = function(e){
//         console.log(e);
//         alert(e.target.innerHTML+ "有" + e.target.innerHTML.length+"字元" );
        
//     }
// }

// let confirmAnswer = confirm("你真的想要取消掉服務嗎");
// console.log(confirmAnswer);
// let thisH1 = document.getElementsByTagName("h1")[1];

// if(confirmAnswer){
    
//     thisH1.innerHTML = "服務已取消";
// }
// else{
//     thisH1.innerHTML = "服務繼續";
// }

/*
let confirmAnswer = prompt("現在時間是早中晚哪一個");

let thisH1 = document.getElementById("response");

switch(confirmAnswer){
case "早上":
    thisH1.innerHTML = "答對";
    break;

case "中午":
    thisH1.innerHTML = "錯誤";
    break;
case "下午":
    thisH1.innerHTML = "錯誤";
    break;
case "晚上":
    thisH1.innerHTML = "錯誤";
    break;
}
*/

function showAlert(){
    thisH1.innerHTML = "Hello";
}


function clicktwo(){
    thisH1.innerHTML = "乖 不要吵";
}



let thisButton = document.getElementsByTagName("Button")[0];
let thisButton2 = document.getElementsByTagName("Button")[1];

let thisH1 = document.getElementById("response");

thisButton.addEventListener("onclick",showAlert);

thisButton.onclick = function (){
    // showAlert();
    
    
    /*
    for(let i = 0;i<10;i++){
        
        if(i==3){
            // break;
            continue;
        }
        console.log(i);    
    }
    */
    
    let person = {
       FirstName : "Cheng",
       LastName : "Ben",
       Num : 37
    };
    
    for(x in person){
        console.log(person[x]);
    }
    
}
thisButton2.onclick = clicktwo;



let thisH2 = document.getElementsByTagName("h2")[0];




function showtime(){
    let date = new Date();
    thisH2.innerHTML = date.toLocaleeString();
}
let dynatime = setInterval(showtime,1000);

let myfriends = ["A","B","C"];