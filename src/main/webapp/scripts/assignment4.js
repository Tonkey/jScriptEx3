$(document).ready(function () {

    $(".assignment4").each(function () {
        $(this).click(function () {
            if ($(this).next().length !== 0) {
                var next = $(this).next();
                swap($(this), next);
            }
        });
    });


    function swap(a, b) {
        a = $(a);
        b = $(b);
        var temp = $('<span>').hide();
        a.before(temp);
        b.before(a);
        temp.replaceWith(b);
    }

});