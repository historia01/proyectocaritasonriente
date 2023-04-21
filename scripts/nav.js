$(document).ready(function() {
    $("#navButtonA").click(function() {
        $("#numberA").focus();
    });
    $("#navButtonB").click(function() {
        $("#numberB").focus();
    });
    $("#navButtonC").click(function() {
        $("#numberC").focus();
    });
    $("#navButtonD").click(function() {
        $("#numberD").focus();
    });
    $("#navButtonMinus").click(function() {
        $("#operatorSubs").prop("checked", true);
    });
    $("#navButtonAdd").click(function() {
        $("#operatorAdd").prop("checked", true);
    });
});