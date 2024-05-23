function activateLogin(user){
    $("#btnRegister").hide();
    $("#btnLogin").hide();
    $("#panelRegister").show();
    $("#btnLogout").show();
    $("#wrapper").html('');
    drawer(profileStructure(user));
    $("#btnEdit").click(function(){
        drawer(editForm);
        $("#btnSubmitEdit").click(function () {
            if(user.userId != -1){
                editUser(user.userId);
            }
            else{
                console.log("Invalid Id");
            }
        });
    });
}

function deactivateLogin(){
    $("#btnRegister").show();
    $("#btnLogin").show();
    $("#panelRegister").hide();
    $("#btnLogout").hide();
    $("#wrapper").html('');
}