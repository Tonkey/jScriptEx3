$(document).ready(function () {


    for (var i = 1; i <= 10; i++) {
        $("#uList").append(
                $('<li id=' + i + '></li>').text("item" + i)
                );
    }

    $("li").not(":even").css("background-color", "lightgrey");
    var size = 50;

    $("li").each(function (i, li) {
        $(this).css('font-size', $(this).prev().css('font-size'));
        $(this).css('font-size', '+=1');
    });

});
