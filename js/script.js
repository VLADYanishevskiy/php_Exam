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