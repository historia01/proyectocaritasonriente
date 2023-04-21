$(document).ready(function() {
    //Left Sidebar recommendations
    $("#otherMenu").click(function(){ 
        if($(".sidebar").css("left")=="-300px"){
            $(".sidebar").css("left", "0");
        }
        else {
            $(".sidebar").css("left", "-300px");
        }
    });
    //Right sidebar graphics
    //Credits menu
    //Modify text
    $("#compareButton").click(function() {
        console.log("loaded Function");
        if($("#numberB").val() == $("#numberD").val()){
            $("#commentHeader").text('Mismo Denominador');
            $("#commentPa1").html('En estos casos se mantiene el<br>mismo numero del denominador y<br>se suma o resta sus denominadores');
            console.log("change OK");
        }
        else {
            $("#commentHeader").text('Diferente Denominador');
            $("#commentPa1").html('En este caso se multiplica los<br>denominadores y se multiplican en forma de X<br>como muestra el gráfico');
        }
        
        
    });
});