function editUser(id) {
    userName = $("#userNameTxt").val();
    gamerTag = $("#gamerTagTxt").val();
    email = $("#emailTxt").val();
    password = $("#passwordTxt").val();
    profilePictureURL = $("#profilePictureURLTxt").val();
    user = null;
    getUser(id, function (userR) {
        if (userR != null) {
            user = userR;
        } else {
            console.log("Error: fetch data.");
        }
    });
    infoUser = {
        "userId": id,
        "userName": userName,
        "gamerTag": gamerTag,
        "email": email,
        "password": password,
        "profilePictureURL": profilePictureURL,
        "creationDate": user.creationDate,
        "enemiesDefeated": user.enemiesDefeated
    }
    $.ajax({
        method: 'PUT',
        url: "http://localhost:4444/user/update",
        dataType: 'TEXT',
        contentType: 'application/json',
        data: JSON.stringify(infoUser),
        success: function () {
            $("#wrapper").html('');
            $("#wrapper").append("Your information has changed");
        },
        error: function () {
            $("#wrapper").html('');
            $("#wrapper").append("Something went wrong.");
        }
    });
}
