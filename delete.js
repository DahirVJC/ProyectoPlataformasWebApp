function deleteUser(id){
    $("#wrapper").html('');
    $.ajax({
        method: 'DELETE',
        url: "http://localhost:4444/user/delete/" + id,
        success: function (user) {
            console.log("data", user);
            deactivateLogin();
        },
        error: function(){
            $("#wrapper").html('');
            $("#wrapper").append("Something went wrong.");
        }
    });
}