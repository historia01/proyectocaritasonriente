let endTime = 0;
let endact = false;
let ques = [0, 0, 0, 0, 0];
let mistakes = 0;
let accerts = 0;
let progress = 0;
let questionNumber = 1;
let verifyQuestion = false;
let correctValue = 0;
let activityType = 0;
let questionLimit = -1;
let timeLimit = -1;
let startActivity = false;
let operationType = 0;
//let localStorageKey = 'default';

function configureActivty(parameters){
    //Type of the Activity, 0 is infinite, 1 is limited
    activityType = parameters[0];
    //if limited questionLimit should be set to -1
    questionLimit = parameters[1];
    //Time
    timeLimit = parameters[2];
    //Operation Type
    operationType = parameters[3];
    //key for the local storage parameter
    //localStorageKey = parameters[4]

}

function prepareArea(act, desc){
    $('#loading-screen').css("opacity", "1");
    opencloseSidebar()
    setTimeout(function(){
        $(".actButton").css("display", "unset")
        $("#msButtons").css("display", "grid");
        $("#keyboardGrid").css("opacity", "0");
        $("#navGrid").css("opacity", "0");
        $("#controlButtons").css("opacity", "0");
        $("#commentHeader").html(act);
        $("#commentPa1").html(desc);
        $('.activityLayout').css("display", "unset")
        $('#loading-screen').css("opacity", "0");
        $('#otherMenu').css("display", "none");
        $('#endActivity').css("display", "unset");
    }, 2000);
};

function restoreArea(){
    console.log("Restore Function Called")
    $('#loading-screen').css("opacity", "1");
    setTimeout(function(){
        $("#prBar").html("")
        $("#clearButton").trigger("click");
        opencloseSidebar();
        $("#keyboardGrid").css("opacity", "1");
        $("#navGrid").css("opacity", "1");
        $("#controlButtons").css("opacity", "1");
        $('.activityLayout').css("display", "none")
        $('#loading-screen').css("opacity", "0");
        $('#otherMenu').css("display", "unset");
        $('#endActivity').css("display", "none");
        endTime = 0; endact = false; ques = [0, 0, 0, 0, 0]; mistakes = 0; accerts = 0;
        progress = 0; questionNumber = 1; verifyQuestion = false; correctValue = 0; activityType = 0; questionLimit = -1; startActivity = false;
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
  
function endTimer() {
    endact = true;
}

function currentTime() {
    return $("#actTimer").html();
}
  
function startTimer(time) {
    console.log("Timer has Started!")
    let intervalId = setInterval(function() {
        time--;
        setTime(time);
        if (time === 0 || endact) {
            clearInterval(intervalId);
            endTime = Number(currentTime());
            console.log("Interval ended, time is " + endTime);
            (activityType == 0)?endScreen(ques) : console.log(null);
        }
    }, 1000);
}

function addProgress(a){
    if(a == 0){
        $("#prBar").append("🟥");
    }
    else if(a == 1){
        $("#prBar").append("🟩");
    }
    else{
        $("#prBar").append("⬜")
    }
}

function randomButtonPosition(a, b){
    //a = position (0, 1, 2, 3) ; b = true value
    switch (a){
        case 1: buttonValues(b, math.randomInt(1, 100), math.randomInt(1, 100), math.randomInt(1, 100)); break;
        case 2: buttonValues(math.randomInt(1, 100), b, math.randomInt(1, 100), math.randomInt(1, 100)); break;
        case 3: buttonValues(math.randomInt(1, 100), math.randomInt(1, 100), b, math.randomInt(1, 100)); break;
        case 4: buttonValues(math.randomInt(1, 100), math.randomInt(1, 100), math.randomInt(1, 100), b); break;
    }   
}

function setQuestion(header, type) {
    //type == 0 : type is a defined number of questions
    //type == 1 : type is an unlimited number of questions
    (type == 0)? textValues("Pregunta " + header, "Seleccione la respuesta Correcta<br>Aciertos: "+ accerts + "<br>Errores: "+ mistakes) : textValues("Pregunta " + header, "<br>Aciertos: "+ accerts + "<br>Errores: "+ mistakes);
    printFraction(math.randomInt(1, 10), math.randomInt(1, 10), math.randomInt(1, 10), math.randomInt(1, 10), (operationType == 0) ? 1 : 0);
    correctValue = $('#numberRA').val(); 
    $('#numberRA').val("");
    randomButtonPosition(math.randomInt(1, 5), correctValue);
}

function checkQuestion(val, html) {
    let b;
    const buttonValue = val;
    const buttonHtml = html;  
    console.log(`Button value is: ${buttonValue} and its html is ${buttonHtml}`);
    $('#numberRA').val(correctValue)
    if(buttonHtml==correctValue){ 
        console.log("Correct, the value is " + correctValue);
        b = 1;
        (activityType == 1)? addProgress(1) : console.log("dummy") ;
        textValues("¡Correcto!😁", "Presiona Cualquier boton para continuar.");
        accerts++
    } 
    else {
        console.log("Incorrect. Correct value is " + correctValue);
        b = 0;
        (activityType == 1)? addProgress(0) : console.log("dummy") ;
        textValues("¡Incorrecto!😔", "Presiona Cualquier boton para continuar.")
        mistakes++  
    }
    return b;
}

function endScreen(responseArray){
    $(".actButton").css("display", "none")
    endTime = Number(currentTime());
    if(activityType == 1){
        $("#prBar").html("");
    for(i = 1; i < (questionNumber); i++){
        if(responseArray[i] == 0){
            addProgress(0);
        } else {
            addProgress(1);
        }
    }
    if (Number(endTime) != 0 && mistakes == 0) {
        rating = "⭐⭐⭐"
        console.log("3 stars awarded because time was different from zero and errors were zero")
    } else if (Number(endTime) != 0 && mistakes < 2.1) {
        rating = "⭐⭐"
        console.log("2 stars awarded because errors were less than two")
    } else {
        rating = "⭐"
        console.log("1 star awarded because no conditions were met")
    }
textValues("¡Se acabo el tiempo!", 'En '+ endTime + ' segundos.<br>' + rating)
    } else {
        if (questionNumber >= 30 && mistakes > (questionNumber*0.75)) {
            rating = "⭐⭐⭐⭐⭐"
            console.log("5 stars awarded because questions were over ")
        } else if (questionNumber >= 30 && mistakes < (questionNumber/2)) {
            rating = "⭐⭐⭐⭐"
            console.log("2 stars awarded because errors were less than two")
        } else if (questionNumber > 12 && mistakes < accerts){
            rating = "⭐⭐⭐"
            console.log("2 stars awarded because time was different from zero")
        } else if (mistakes < (questionNumber/3)){
            rating = "⭐⭐"
            console.log("2 stars awarded because time was different from zero")
        } else {
            rating = "⭐"
            console.log("1 star awarded because no conditions were met")
        }
        textValues("¡Se acabo el tiempo!", 'Preguntas: ' + questionNumber + '<br>Aciertos: '+ accerts + '<br>Errores: '+ mistakes + '<br>' + rating);
        $("#prBar").html("");
    }
    setTimeout(function(){
        restoreArea();
    }, 4000)
}

function activityStart(h1, p){
    prepareArea(h1, p);
}

//function saveData(){
//    localStorage.setItem('')
//}

$(document).ready(function(){
    const fraction1 = $("#fraction1");
    const fractionOperator = $("#fractionOperator");
    const fraction2 = $("#fraction2");
    $(".actButton").click(function() {
        //response Logic
        if(startActivity == false){
            startTimer(timeLimit)
            startActivity = true;
        }
        const buttonValue = $(this).val();
        const buttonHtml = $(this).html();
        if(questionNumber > questionLimit && questionLimit != -1 && verifyQuestion == false){
            endTimer();
            endScreen(ques);
        } else if(verifyQuestion == false){
            setQuestion(questionNumber, activityType);
            verifyQuestion = true;
        }
        else{
            ques[questionNumber] = checkQuestion(buttonValue, buttonHtml);
            verifyQuestion = false;
            buttonValuesClear();
            questionNumber++;
        }
      });

    $("#actStartButton2").click(function(){
        $("#numberRA").css("border-color", "rgb(112, 134, 255)");
        $("#numberRA").css("background-color", "rgb(58, 44, 225)");
        configureActivty([1, 5, 30, 0])
        setTime(60);
        activityStart("Actividad 1", "Sumas de 2 digitos.");
        fraction1.css("display", "none");
        fractionOperator.css("display", "none");
        fraction2.css("display", "none");
    });
    $("#actStartButton3").click(function(){
        $("#numberRA").css("border-color", "rgb(112, 134, 255)");
        $("#numberRA").css("background-color", "rgb(58, 44, 225)");
        configureActivty([1, 5, 30, 1])
        setTime(60);
        activityStart("Actividad 2", "Restas de 2 digitos.");
        fraction1.css("display", "none");
        fractionOperator.css("display", "none");
        fraction2.css("display", "none");
    })
    $("#actStartButtonNTM1").click(function(){
        $("#numberRA").css("border-color", "rgb(112, 134, 255)");
        $("#numberRA").css("background-color", "rgb(58, 44, 225)");
        configureActivty([0, -1, 60, 1])
        setTime("x");
        activityStart("Ilimitado 1", "Sumas de 2 digitos.");
        fraction1.css("display", "none");
        fractionOperator.css("display", "none");
        fraction2.css("display", "none");
    })
    $("#actStartButtonNTM2").click(function(){
        $("#numberRA").css("border-color", "rgb(112, 134, 255)");
        $("#numberRA").css("background-color", "rgb(58, 44, 225)");
        configureActivty([0, -1, 60, 0])
        setTime(60);
        activityStart("Ilimitado 2", "Restas de 2 digitos.");
        fraction1.css("display", "none");
        fractionOperator.css("display", "none");
        fraction2.css("display", "none");
    })
    $("#endActivity").click(function(){
        endScreen();
    })
});