function activateLogin(user){
    $("#btnRegister").hide();
    $("#btnLogin").hide();
    $("#panelRegister").show();
    $("#btnLogout").show();
    $("#wrapper").html('');
    drawer(profileStructure(user));
}

function deactivateLogin(){
    $("#btnRegister").show();
    $("#btnLogin").show();
    $("#panelRegister").hide();
    $("#btnLogout").hide();
    $("#wrapper").html('');
}