$(document).ready(function() {
    var currentFocus = "#numberA";
    var currentFocusOp = "#fraction1Op";
    //reset all colors function
    function resetColor(){
        $("#numberA").css("border-color", "#4e2c0b");
        $("#numberA").css("background-color", "#7d4714");
        $("#numberB").css("border-color", "#4e2c0b");
        $("#numberB").css("background-color", "#7d4714");
        $("#numberC").css("border-color", "#4e2c0b");
        $("#numberC").css("background-color", "#7d4714");
        $("#numberD").css("border-color", "#4e2c0b");
        $("#numberD").css("background-color", "#7d4714");
    }
    //Navigation
    $("#navButtonA").click(function() {
        resetColor();
        $("#numberA").css("border-color", "rgb(112, 134, 255)");
        $("#numberA").css("background-color", "rgb(58, 44, 225)");
        currentFocus = "#numberA"; 
        currentFocusOp = "#fraction1Op"; 
    });
    $("#navButtonB").click(function() {
        resetColor();
        $("#numberB").css("border-color", "rgb(112, 134, 255)");
        $("#numberB").css("background-color", "rgb(58, 44, 225)");
        currentFocus = "#numberB";
        currentFocusOp = "#fraction1Op";
    });
    $("#navButtonC").click(function() {
        resetColor();
        $("#numberC").css("border-color", "rgb(112, 134, 255)");
        $("#numberC").css("background-color", "rgb(58, 44, 225)");
        currentFocus = "#numberC";
        currentFocusOp = "#fraction2Op";
    });
    $("#navButtonD").click(function() {
        resetColor();
        $("#numberD").css("border-color", "rgb(112, 134, 255)");
        $("#numberD").css("background-color", "rgb(58, 44, 225)");
        currentFocus = "#numberD";
        currentFocusOp = "#fraction2Op";
    });
    $("#navButtonMinus").click(function() {
        $("#operatorSubs").prop("checked", true);
    });
    $("#navButtonAdd").click(function() {
        $("#operatorAdd").prop("checked", true);
    });
    //NumPad
    $("#keyboardButton1").click(function() {
        console.log("1 button Pressed")
        let value1 = $(currentFocus).val();
        $(currentFocus).val(value1 + "1");
    });
    $("#keyboardButton2").click(function() {
        console.log("2 button Pressed")
        let value1 = $(currentFocus).val();
        $(currentFocus).val(value1 + "2");
    });
    $("#keyboardButton3").click(function() {
        console.log("3 button Pressed")
        let value1 = $(currentFocus).val();
        $(currentFocus).val(value1 + "3");
    });
    $("#keyboardButton4").click(function() {
        console.log("4 button Pressed")
        let value1 = $(currentFocus).val();
        $(currentFocus).val(value1 + "4");
    });
    $("#keyboardButton5").click(function() {
        console.log("5 button Pressed")
        let value1 = $(currentFocus).val();
        $(currentFocus).val(value1 + "5");
    });
    $("#keyboardButton6").click(function() {
        console.log("6 button Pressed")
        let value1 = $(currentFocus).val();
        $(currentFocus).val(value1 + "6");
    });
    $("#keyboardButton7").click(function() {
        console.log("7 button Pressed")
        let value1 = $(currentFocus).val();
        $(currentFocus).val(value1 + "7");
    });
    $("#keyboardButton8").click(function() {
        console.log("8 button Pressed")
        let value1 = $(currentFocus).val();
        $(currentFocus).val(value1 + "8");
    });
    $("#keyboardButton9").click(function() {
        console.log("9 button Pressed")
        let value1 = $(currentFocus).val();
        $(currentFocus).val(value1 + "9");
    });
    $("#keyboardButtonDel").click(function() {
        console.log("Del pressed");
        let value1 = $(currentFocus).val();
        console.log(value1.length);
        $(currentFocus).val(value1.substr(0, value1.length -1 ));
    });
    $("#keyboardButtonMinusPlus").click(function() {
        console.log("Minus Plus button Pressed");
        $(currentFocus).val('');
    });
});