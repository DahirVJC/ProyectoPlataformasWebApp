function registerUser(callback){
    userName = $("#userNameTxt").val();
    gamerTag = $("#gamerTagTxt").val();
    email = $("#emailTxt").val();
    password = $("#passwordTxt").val();
    profilePictureURL = $("#profilePictureURLTxt").val();
    infoUser = {
        "userId": 0,
        "userName": userName,
        "gamerTag": gamerTag,
        "email": email,
        "password": password,
        "profilePictureURL": profilePictureURL,
        "creationDate": new Date(),
        "enemiesDefeated": 0
    }
    
    $.ajax({
        method: 'POST',
        url: "http://localhost:4444/user/register",
        dataType: 'JSON',
        contentType: 'application/json',
        data: JSON.stringify(infoUser),
        success: function (user) {
            activateLogin(user);
            callback(user.id);
        },
        error: function(){
            $("#wrapper").html('');
            $("#wrapper").append("Something went wrong.");
        }
    });
    return -1;
}
