$(document).ready(function(){
    $("#compareButton").click(function(){
        if($("#numberB").val() == $("#numberD").val()){
            $('.animContainer').animate({opacity: 100}, 1000);
            $('#animLine1').css({
                "transform" : "rotate(0deg)",
                "top" : "371%"
            });
            $('#animLine2').css({
                "transform" : "rotate(0deg)",
                "top" : "-80%"
            });
            $('#animLine3').css({
                "display" : "none"
            });
        }
        else{
            $('.animContainer').css("opacity","0");
            $('.animContainer').animate({opacity: 100}, 1000);
            $('#animLine1').css({
                "transform" : "rotate(-23deg)", 
                "top" : "180%"
            });
            $('#animLine2').css({
                "transform" : "rotate(24deg)",
                "top" : "59%"
            });
            $('#animLine3').css({
                "display" : "unset"
            });   
        }   
    });
});