import $ from "jquery";

$(document).ready(function(){
    $(".btn_light").click(function(){
        $(".modal").show();
        $(".modal").animate({opacity:'1'},500);
        $(".overlay").show();
        $(".overlay").animate({opacity:'1'},500);
        return false;
    });
    $(".overlay").click(function(){
        $(".modal").animate({opacity:'0'},500,function(){
            $(".modal").hide();
        });
        $(".overlay").animate({opacity:'0'},500,function(){
            $(".overlay").hide();
        });
        return false;
    });
});