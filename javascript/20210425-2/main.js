$(function(){
    $("#coursetable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
var aaa = 2/21/2021; 
var topiclength = topic.length;
var millisecondperday = 24*60*60*1000;
for(var i = 0;i<topiclength;i++){
    if(i%2 == 0){
        $("#coursetable").append("<tr>");
        $("#coursetable").append(`<td>${i+1}</td>`);   
        $("#coursetable").append(`<td>${new Date(startDate.getTime()+(7*i*millisecondperday)).toLocaleDateString().slice(5)}</td>`);   
        $("#coursetable").append(`<td>${topic[i]}</td>`);   
        $("#coursetable").append("</tr>");
        
    }else{
        $("#coursetable").append("<tr>");
        $("#coursetable").append(`<td style="background-color:skyblue;">${i+1}</td>`);   
        $("#coursetable").append(`<td style="background-color:skyblue;">${new Date(startDate.getTime()+(7*i*millisecondperday)).toLocaleDateString().slice(5)}</td>`);   
        $("#coursetable").append(`<td style="background-color:skyblue;">${topic[i]}</td>`);   
        $("#coursetable").append("</tr>");
       
    }
}
});