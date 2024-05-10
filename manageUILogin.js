function activateLogin(user){
    $("#btnRegister").hide();
    $("#btnLogin").hide();
    $("#panelRegister").show();
    $("#btnLogout").show();
    $("#wrapper").html('');
    drawer(cvStructure(user));
}

function deactivateLogin(){
    $("#btnRegister").show();
    $("#btnLogin").show();
    $("#panelRegister").hide();
    $("#btnLogout").hide();
    $("#wrapper").html('');
}