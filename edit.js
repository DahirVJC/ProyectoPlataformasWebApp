function editUser(id){
    userName = $("#userNameTxt").val();
    gamerTag = $("#gamerTagTxt").val();
    password = $("#passwordTxt").val();
    email = $("#emailTxt").val();
    infoUser = {
        "id": id,
        "userName": userName,
        "gamerTag": gamerTag,
        "password": password,
        "email": email
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
        error: function(){
            $("#wrapper").html('');
            $("#wrapper").append("Something went wrong.");
        }
    });
}
