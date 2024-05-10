function logUser(callback){
    uname = $("#nameTxt").val();
    password = $("#passwordTxt").val();
    $("#wrapper").html('');
    $.ajax({
        method: 'GET',
        url: "http://localhost:4444/user/login?name="+uname+"&password="+password,
        dataType: 'JSON',
        contentType: 'application/json',
        success: function (user) {
            console.log("data", user);
            activateLogin(user);
            callback(user.id);
        },
        error: function(){
            $("#wrapper").html('');
            $("#wrapper").append("Wrong password or username.");
        }
    });
    return -1;
}