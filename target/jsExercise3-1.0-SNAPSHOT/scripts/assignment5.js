$(document).ready(function () {


    $("#submitForm").click(function () {
        checkFields();
    });
});

function checkFields() {
    $('#submitForm').attr('disabled', 'disabled');
    $('form > input').each(function () {
        $(this).attr("placeholder", "Please fill out the field! dumbass");
    });
    
    $('form > input').keyup(function () {

        var empty = false;
        $('form > input').each(function () {
            var temp = $(this);
            if (temp.val() === '') {
                empty = true;
            }
        });

        if (empty) {
            $('#submitForm').attr('disabled', 'disabled');
        } else {
            $('#submitForm').removeAttr('disabled');
        }
    });

}
