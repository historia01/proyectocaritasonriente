let timer, b1, b2, b3, b4, th, tp, pb, rating, progress, iscom, endact = false, correctValue, endTime0;
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
        $('.activityLayout').css("display", "none")
        $('#loading-screen').css("opacity", "0");
    }, 2000);
}

function buttonValues(a, b, c, d){
    $("#actButton1").html(a);
    $("#actButton2").html(b);
    $("#actButton3").html(c);
    $("#actButton4").html(d);
}

function buttonValuesClear(){
    $("#actButton1").html("x");
    $("#actButton2").html("x");
    $("#actButton3").html("x");
    $("#actButton4").html("x");
}

function textValues(a, b){
    $("#commentHeader").html(a);
    $("#commentPa1").html(b);
}

function setTime(time) {
    $("#actTimer").html(time);
  }
  
function endTime() {
    return $("#actTimer").html();
}
  
function startTimer(time) {
    let intervalId = setInterval(function() {
        time--;
        setTime(time);
        if (time == 0 || endact == true) {
            clearInterval(intervalId);
            let A = endTime();
            console.log(A);
            endTime0 = A; // log the value of A to the console
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
    textValues(header, paragraph);
    progressBar(bar_lenght, bar_position, 2);
    printFraction(math.randomInt(1, 10), math.randomInt(1, 10), math.randomInt(1, 10), math.randomInt(1, 10), 1)
    correctValue = $('#numberRA').val(); 
    $('#numberRA').val("");
    randomButtonPosition(math.randomInt(1, 5), correctValue);
}

function act2_2(val, html, bar_lenght, bar_position) {
    let b;
    const buttonValue = val;
    const buttonHtml = html;  
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
        progressBar(bar_lenght, bar_position, bar_lenght, bar_position)
        textValues("¡Incorrecto!😔", "Presiona Cualquier boton para continuar.")   
    }
    return b;
}

function endScreen(responseArray, responseArrayLenght ,endTime){
    let errorCount = 0;
    for(let i = 0; i < responseArrayLenght; i++){
        if(responseArray[i] == 0){
            addProgress(0);
            errorCount++;
        } else {
            addProgress(1);
        }
    }
    if (Number(endTime0) != 0 && errorCount < 2) {
        rating = "⭐⭐⭐"
        console.log("3 stars awarded because time was different from zero and errors were less than two")
    } else if (errorCount < 2) {
        rating = "⭐⭐"
        console.log("2 stars awarded because errors were less than two")
    } else if (Number(endTime0) != 0){
        rating = "⭐⭐"
        console.log("2 stars awarded because time was different from zero")
    } else {
        rating = "⭐"
        console.log("1 star awarded because no conditions were met")
    }
    textValues("¡Actividad Terminada!", 'En ' + endTime + '\\b'+ rating + "</big>");
    $("#prBar").html("");
    
    setTimeout(function(){
        restoreArea();
    }, 7500)
}

function act2(){
    prepareArea("Actividad 1", "Sumas de 2 Digitos<br>Tiempo Limite: 60s<br>Presiona un boton para Continuar");
}

function activity2start(time){
    let ques = [0, 0, 0, 0, 0];
    let qn = 0;
    let acN = 0;
    console.log("activity started")
    act2();
    $(".actButton").click(function(){
        const buttonValue = $(this).val();
        const buttonHtml = $(this).html();
        console.log(buttonHtml, " + ", buttonValue); 
        switch (acN) {
            //1
            case 0:
                console.log("Iteration Number= " + acN)
                startTimer(time);
                act2_1("1", "test", 5, 0);                
                acN++; break;
            case 1:
                console.log("Iteration Number= " + acN)
                ques[0] = act2_2(buttonValue, buttonHtml, 5, 0);
                console.log("Added as:"+ques[0]);
                buttonValuesClear()
                acN++; break;
            //2
            case 2:
                console.log("Iteration Number= " + acN)
                act2_1("2", "test", 5, 1);                
                acN++; break;
            case 3:
                console.log("Iteration Number= " + acN)
                ques[1] = act2_2(buttonValue, buttonHtml, 5, 1);
                console.log("Added as:"+ques[1]);
                buttonValuesClear()
                acN++; break;
            //3
            case 4:
                console.log("Iteration Number= " + acN)
                act2_1("3", "test", 5, 2);                
                acN++; break;
            case 5:
                console.log("Iteration Number= " + acN)
                ques[2] = act2_2(buttonValue, buttonHtml, 5, 2);
                console.log("Added as:"+ques[2]);
                buttonValuesClear()
                acN++; break;
            //4
            case 6:
                console.log("Iteration Number= " + acN)
                act2_1("4", "test", 5, 3);                
                acN++; break;
            case 7:
                console.log("Iteration Number= " + acN)
                ques[3] = act2_2(buttonValue, buttonHtml, 5, 3);
                console.log("Added as:"+ques[3]);
                buttonValuesClear()
                acN++; break;
            //5
            case 8:
                console.log("Iteration Number= " + acN)
                act2_1("5", "test", 5, 4);
                acN++; break;
            case 9:
                console.log("Iteration Number= " + acN)
                ques[4] = act2_2(buttonValue, buttonHtml, 5, 4);
                console.log("Added as:"+ques[4]);
                endact = true;
                console.log("Activity Ended, timer stopped at " + endTime0)
                buttonValuesClear();                
                acN++; break;
            //endscreen
            case 10:
                endScreen(ques, 5, endTime0);
                break;
        }     
    })
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
    correctValue = 0;
    endTime0 = -1;
})