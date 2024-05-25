function activateLogin(user){
    $("#btnRegister").hide();
    $("#btnLogin").hide();
    $("#panelRegister").show();
    $("#btnDownload").show();
    $("#btnLogout").show();
    $("#wrapper").html('');
    drawer(profileStructure(user));
    $("#btnEdit").click(function(){
        drawer(editForm);
        $("#btnSubmitEdit").click(function () {
            if(user.userId != -1){
                if(isValidEmail($("#emailTxt").val())){
                    editUser(user.userId);
                }
                else{
                    alert("Invalid email");
                }
            }
            else{
                console.log("Invalid Id");
            }
        });
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
    $("#btnDownload").hide();
    $("#btnLogout").hide();
    $("#wrapper").html('');
    $("#wrapper").html(
        '<br><br>'+
        '<img src="./Assets/Preview.png" alt="Preview">'+
        '<br><br>'+
        '<button id="btnDownload" class="bigButton btnBright">Download</button>'
    );
    $('#btnDownload').click(function () {
        window.location.href='https://github.com/PancakePanda94/ProyectoPlataformas';
    });
}