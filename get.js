function getUserByName(uname){
    if (uname == "") {
        $("#wrapper").html('');
        $("#wrapper").append("Introduce a valid username");
    }
    $("#wrapper").html('');
    $.ajax({
        method: 'GET',
        url: "http://localhost:4444/user/search/" + uname,
        dataType: 'JSON',
        contentType: 'application/json',
        success: function (user) {
            console.log("data", user);
            drawer(profileStructure(user));
        }
    });
}