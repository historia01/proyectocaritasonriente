$(function() {
    window.onload = function() {
        console.log("WEBPAGE LOADED!")
        $('#loading-screen').addClass('hide');
    }
});
$(document).ready(function(){
    setTimeout(function(){
        $('#loading-screen').addClass('hide');
        console.log("x")
    },6000)
    let windowVar = $(".rotationWarning");
    let destroyMe = $("#destroyMe");
    if (window.orientation == 0 || window.orientation == 180) {
        console.log("Device is in portrait mode"); 
        windowVar.css("display", "unset");
    } else {
        console.log("Device is in landscape mode");
        windowVar.remove();
        destroyMe.remove();
//       windowVar.css("display", "unset");
    }
    $("#closePrompt").click(function(){
        windowVar.remove();
        destroyMe.remove();
        requestFS();
    });  
});