// function showAlert(){
//     // innerHTML位置 = <標籤>innerHTML位置</標籤>
//     let thisH1 = document.getElementsByTagName(li)[0]
//     thisH1.onclick=function(){
//         thisH1.innerHTML = "Hello!";
//     }
// }

window.onload = function(){
    
    document.onclick = function(e){
        console.log(e.target.innerHTML)
        alert(e.target.innerHTML+"有"+e.target.innerHTML.length+"個字元"); // alert() 跳出式視窗
    }

    
    
}