function deleteUser(id){
    $("#wrapper").html('');
    $.ajax({
        method: 'DELETE',
        url: "http://localhost:4444/user/delete/" + id,
        success: function (user) {
            console.log("data", user);
            alert("User deleted succesfully")
            deactivateLogin();
        },
        error: function(){
            $("#wrapper").html('');
            $("#wrapper").append("<br><br>Something went wrong.");
        }
    });
}