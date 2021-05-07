$(
    function(){
        $("input").on("click",function(){
            // alert("你好");
            // $("h1").text("Hello");
            var lilength = $("li").length;
            var randomnum = Math.floor(Math.random()*lilength);
            
            $("h1").text($("li").eq(randomnum).text());
            $("img").attr("src",$("li").eq(randomnum).attr("value"));

        });
    }

);

