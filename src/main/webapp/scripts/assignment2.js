
$('.assignment2').each(function (){
    $(this).click(function (){
        var temp = $(this).text();
        
        $(this).text(Math.pow(temp,2));
    });
});



