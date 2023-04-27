let timer, b1, b2, b3, b4, th, tp, pb, rating, progress, iscom, endact;
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

function textValues(a, b){
    $("#commentHeader").html(a);
    $("#commentPa1").html(b);
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
    console.log("Interval ended, time=" + time);
}
  
function addProgress(a){
    let val = $("#prBar").html();
    if(a == 0){
        $("#prBar").html(val + "🟥");
    }
    else if(a == 1){
        $("#prBar").html(val + "🟩");
    }
    else if(a == 2){
        $("#prBar").html(val + "🟦");
    }
    else{
        $("#prBar").html(val + "⬜")
    }
}

function progressBar(length, position, color){
    $("#prBar").html("");
    let d = true;
    for(let i = 0; i < length; i++){
        if(i == position && true){
            addProgress(color);
        } else {
            addProgress(-1);
            d = false;
        }
    }
};

function randomButtonPosition(a, b){
    //a = position (0, 1, 2, 3) ; b = true value
    switch (a){
        case 1: buttonValues(b, math.randomInt(1, 100), math.randomInt(1, 100), math.randomInt(1, 100)); break;
        case 2: buttonValues(math.randomInt(1, 100), b, math.randomInt(1, 100), math.randomInt(1, 100)); break;
        case 3: buttonValues(math.randomInt(1, 100), math.randomInt(1, 100), b, math.randomInt(1, 100)); break;
        case 4: buttonValues(math.randomInt(1, 100), math.randomInt(1, 100), math.randomInt(1, 100), b); break;
    }   
}

function act2_1(header, paragraph, bar_lenght, bar_position) {
    let b;    
    textValues(header, paragraph);
    progressBar(bar_lenght, bar_position0, 2);
    printFraction(math.randomInt(1, 10), math.randomInt(1, 10), math.randomInt(1, 10), math.randomInt(1, 10), 1)
    let correctValue = $('#numberRA').val(); 
    $('#numberRA').val("");
    randomButtonPosition(math.randomInt(1, 5), correctValue);
    $(".actButton").click(function(){
        const buttonValue = $(this).val();
        const buttonHtml = $(this).html();  
        console.log(`Button value is: ${buttonValue} and its html is ${buttonHtml}`);
        if(buttonHtml==correctValue){ 
            console.log("correct; " + correctValue);
            b = 1;
            progressBar(bar_lenght, bar_position, 1)
            textValues("¡Correcto!😁", "Presiona Cualquier boton para continuar.");
        } 
        else {
            console.log("incorrect, correct is " + correctValue);
            b = 0;
            progressBar(bar_lenght, bar_position, 0)
            textValues("¡Incorrecto!😔", "Presiona Cualquier boton para continuar.")   
        }
    })
    return b;
}


function act2(){
    prepareArea("Actividad 1", "Sumas de 2 Digitos<br>Tiempo Limite: 60s<br>Presiona un boton para Continuar");
    setTime(60);
    progressBar(5, -1, -1);
}

function activity2start(time){
    let ques = [0, 0, 0, 0, 0];
    console.log("activity started")
    act2();
    startTimer(time)
    console.log("time set to" + time)
    ques[0] = act2_1();
    console.log("the result is  " + ques[0] + (ques[0]==0)?" and thus incorrect":" and thus correct");
}

$(document).ready(function(){
    timer = $("#actTimer");
    b1 = $("#actButton1");
    b2 = $("#actButton2");
    b3 = $("#actButton3");
    b4 = $("#actButton");
    th = $("#commentHeader");
    tp = $('#commentPa1');
    pb = $('#prBar');
})