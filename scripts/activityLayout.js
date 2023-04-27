let timer = $("#actTimer");
let b1 = $("#actButton1");
let b2 = $("#actButton2");
let b3 = $("#actButton3");
let b4 = $("#actButton");
let th = $("#commentHeader");
let tp = $('#commentPa1');
let pb = $('#prBar');
let rating, progress, iscom, endact;

function prepareArea(act, desc){
    $('#loading-screen').css("opacity", "1");
    setTimeout(function(){
        $("#keyboardGrid").css("opacity", "0");
        $("#navGrid").css("opacity", "0");
        $("#controlButtons").css("opacity", "0");
        $("#commentHeader").html(act);
        $("#commentPa1").html(desc);
        $('.activityLayout').css("display", "unset")
        $('#loading-screen').css("opacity", "0");
    }, 2000);
};

function restoreArea(){
    $('#loading-screen').css("opacity", "1");
    setTimeout(function(){
        $("#keyboardGrid").css("opacity", "1");
        $("#navGrid").css("opacity", "1");
        $("#controlButtons").css("opacity", "1");
        $('.activityLayout').css("display", "unset")
        $('#loading-screen').css("opacity", "0");
    }, 2000);
}

function buttonValues(a, b, c, d){
    $("#actButton1").html(a);
    $("#actButton2").html(b);
    $("#actButton3").html(c);
    $("#actButton4").html(d);
}

function setTime(time) {
    $("#actTimer").html("⏱=" + time + "s");
  }
  
  function endTime() {
    return $("#actTimer").html();
  }
  
  function startTimer(time) {
    let intervalId = setInterval(function() {
      time--;
      setTime(time);
      if (time == 0 || endact) {
        clearInterval(intervalId);
        let A = endTime();
        console.log(A); // log the value of A to the console
      }
    }, 1000);
  }
  
function addProgress(a){
    let val = $("#prBar").html();
    if(a == 0){
        $("#prBar").html(val + "🟥");
    }
    else if(a == 1){
        $("#prBar").html(val + "🟩");
    }
    else if(a == 3){
        $("#prBar").html(val + "🟦");
    }
    else{
        $("#prBar").html(val + "⬜")
    }
}

function progressBar(a, b, c){
    $("#prBar").html("");
    let d = true;
    for(let i = 0; i < a; i++){
        if(i == b && true){
            addProgress(c);
        } else {
            addProgress(-1);
            d = false;
        }
    }
};

function act2(){
    let ques = [0, 0, 0, 0, 0];
    prepareArea("Actividad 1", "Sumas de 2 Digitos<br>Tiempo Limite: 60s<br>Presiona un boton para Continuar");
    setTime(60);
    progressBar(5, -1, -1);
}
