$(function(){

    var currentQ = null;
    var currentA = null;
    var i = null;
    
        $("#btn_1").on("click",function(){
            if(currentQ == null){
                currentQ = 0;
                $("#question").text(questions[0].question); 
                
                questions[0].answers.forEach(function(element,index,array){
                    $("#option").append(`<input name="options" type="radio" value='${index}'><label>${element[0]}</label><br>`);
                });
            }
            $("#btn_1").attr("value","next");

        });
    
}


);