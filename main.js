$(document).ready(function () {
    deactivateLogin();
    var uId = -1;
    
    $("#btnRegister").click(function () {
        drawer(registrationForm);
        $("#btnSubmitReg").click(function () {
            registerUser(function(id) {
                if (id !== null) {
                    uId = id;
                } else {
                    console.log("Register failed.");
                }
            });
        });
    });
    $("#btnLogin").click(function () {
        drawer(loginForm);
        $("#btnSubmitLog").click(function () {
            logUser(function(id) {
                if (id !== null) {
                    uId = id;
                } else {
                    console.log("Login failed.");
                }
            });
        });
    });
    $("#btnLogout").click(function () {
        deactivateLogin();
        uId = -1
    });
    $("#btnEdit").click(function(){
        drawer(editForm);
        $("#btnSubmitEdit").click(function () {
            if(uId != -1){
                editUser(uId);
            }
            else{
                console.log("Invalid Id");
            }
        });
    });
    $("#btnDelete").click(function(){
        if(uId != -1){
            deleteUser(uId);
        }
        else{
            console.log("Invalid Id");
        }
    });
});