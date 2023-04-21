$(document).ready(function() {
    $("#otherMenu").click(function(){ 
        if($(".sidebar").css("left")=="-300px"){
            $(".sidebar").css("left", "0");
        }
        else {
            $(".sidebar").css("left", "-300px");
        }
    });
});