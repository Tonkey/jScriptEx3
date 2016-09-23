$(document).ready(function () {

    $('#ass1Div').append('<div id="div1">1</div>');
    $('#ass1Div').append('<div id="div2">2</div>');
    $('#ass1Div').append('<div id="div3">3</div>');

    $("#div1").css("width", "100px");
    $("#div1").css("height", "100px");
    $("#div1").css("background-color", "red");

    $("#div2").css("width", "100px");
    $("#div2").css("height", "100px");
    $("#div2").css("background-color", "blue");

    $("#div3").css("width", "100px");
    $("#div3").css("height", "100px");
    $("#div3").css("background-color", "green");


    $("#div1").click(function () {
        $(this).hide();
    });

    $("#div2").mouseover(function () {
        $(this).css("border-style", "solid");
        $(this).css("border-width", "4px");
    });
    $("#div2").mouseout(function () {
        $(this).css("border-style", "none");
        $(this).css("border-width", "0px");
    });

    $("#div2").click(function () {
        $("#div3").css("font-size", "200%");
    });
});

