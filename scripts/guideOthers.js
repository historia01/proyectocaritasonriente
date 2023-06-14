function opencloseSidebar(){ 
    if($(".sidebar").css("left")=="-300px"){
        $(".sidebar").css("left", "0");
    } else {
        $(".sidebar").css("left", "-300px"); }
    }
$(document).ready(function() {
    //Left Sidebar recommendations
    $("#otherMenu").click(function(){
        opencloseSidebar();
    });
    //Credits menu
    $("#bottomAreaTrigger").click(function() {
        if($(".tutorialMenu").css("display")=="none"){
            $(".tutorialMenu").css({
                "display": "unset"
            });
        }
        else {
            $(".tutorialMenu").css("display", "none");
        }
      });
    $("#bottomAreaClose").click(function(){
        $(".lowMenu").css("display", "none");
    });    
    //Modify text
    $("#compareButton").click(function() {
        console.log("loaded Function");
        if($("#numberB").val() == $("#numberD").val()){
            $("#commentHeader").text('Mismo Denominador');
            $("#commentPa1").html('En estos casos se mantiene el<br>mismo numero del denominador y<br>se suma o resta sus numeradores');
            console.log("change OK");
        }
        else {
            $("#commentHeader").text('Diferente Denominador');
            $("#commentPa1").html('Se multiplica en forma de X como <br><a href="#" id="triggerAni">muestra el gráfico</a> y se escribe las<br>respuestas en el numerador para sumar o restar');
        }    
    });    
});