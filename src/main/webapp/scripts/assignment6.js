$(document).ready(function () {

    var persList = [new person("Nicklas Molving", 20, "nm@test.com"), new person("Test 2", 19, "test2@test.com"), new person("Test 3", 25, "test3@test.com")];

    $('#table_here').append('<table />');

    $('#table_here table').append('<tr><th>Name</th><th>age</th><th>email</th></tr>');

    $.each(persList, function (i){
        tRow=$('<tr>');
        tCell = $('<td>').html(persList[i].name);
        tCell2 = $('<td>').html(persList[i].age);
        tCell3 = $('<td>').html(persList[i].email);
        $('#table_here table').append(tRow.append(tCell,tCell2,tCell3));
        
    });

    $('#table_here table tr').each(function (){
        $(this).hover(function (){
            $(this).addClass('hover');
        }, function (){
            $(this).removeClass('hover');
        });
    });
    
    function person(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
});
