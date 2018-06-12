$( document ).ready(function() {
    if($("span.LangType").text() == "English"){
    $("span.LangType").data( "LangType", "eng" );
    };
});

$("#triangle-left").click(function(){
    if($("span.LangType").text() == "English"){
    $("span.LangType").data( "LangType", "ru" );
    $("span.LangType").text("Russian");
    }
    else{
        $("span.LangType").data( "LangType", "eng" );
    $("span.LangType").text("English");
    }
});

$("#triangle-right").click(function(){
    if($("span.LangType").text() == "English"){
    $("span.LangType").data( "LangType", "ru" );
    $("span.LangType").text("Russian");
    }
    else{
        $("span.LangType").data( "LangType", "eng" );
    $("span.LangType").text("English");
    }
});

$("#triangle-left").mousedown(function(){
    $("#triangle-left").css('border-right','10px solid #cdcdcd');
});
$("#triangle-right").mousedown(function(){
    $("#triangle-right").css('border-left','10px solid #cdcdcd');
});

$("#triangle-left").mouseup(function(){
    $("#triangle-left").css('border-right','10px solid #656565');
});
$("#triangle-right").mouseup(function(){
    $("#triangle-right").css('border-left','10px solid #656565');
});

$(".CategorySPN").mouseover(function(){
   $(".CategorySPN").css("cursor","pointer") ;
});

$(".ShopCategories").mouseover(function(){
   $(".ShopCategories").css("cursor","pointer") ;
});