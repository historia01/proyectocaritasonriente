$(document).ready(function(){
    $("#compareButton").click(function(){
        if($("#numberB").val() == $("#numberD").val()){
            $('.animContainer').animate({opacity: 100}, 1000);
            $('#animLine1').css({
                "transform" : "rotate(0deg)"
            });
            $('#animLine2').css({
                "transform" : "rotate(0deg)",
                "top" : "-36%"
            });
            $('#animLine3').css({
                "display" : "none"
            });
        }
        else{
            $('.animContainer').css("display", "unset");
            $('.animContainer').animate({opacity: 100}, 1000);
            setTimeout(function(){
                //$('.animContainer').animate({opacity: 0}, 900);
                $('.animObj').animate($('.animObj').css("animation-iteration-count", 3), 100);
                //$('.animContainer').animate({opacity: 100}, 1200);
            }, 4000)
        }
    });
});