function activateLogin(user){
    $("#btnRegister").hide();
    $("#btnLogin").hide();
    $("#panelRegister").show();
    $("#btnLogout").show();
    $("#wrapper").html('');
    drawer(profileStructure(user));
    $("#btnEdit").click(function(){
        drawer(editForm);
        if(isValidEmail($("#emailTxt").val())){
            $("#btnSubmitEdit").click(function () {
                if(user.userId != -1){
                    editUser(user.userId);
                }
                else{
                    console.log("Invalid Id");
                }
            });
        }
        else{
            alert("Invalid email");
        }
    });
    $("#btnDelete").click(function(){
        if(user.userId != -1){
            deleteUser(user.userId);
        }
        else{
            console.log("Invalid Id");
        }
    });
}

function deactivateLogin(){
    $("#btnRegister").show();
    $("#btnLogin").show();
    $("#panelRegister").hide();
    $("#btnLogout").hide();
    $("#wrapper").html('');
}