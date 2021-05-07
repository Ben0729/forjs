let thisH1 = document.getElementsByTagName("h1")[0];

thisH1.addEventListener("click",showAlert);

function showAlert(){
   alert("字串長度為" + thisH1.textContent.length + "\n" + "World在字串的位置為" + thisH1.innerHTML.indexOf("World!") + "\n" + "第一個單字是" + thisH1.innerHTML.split(" ")[0] + "\n" + "最後的單字為" + thisH1.innerHTML.split(" ")[1]);
}