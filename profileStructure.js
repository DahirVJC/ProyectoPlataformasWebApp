function profileStructure(user){
    return (
        "<div class='divProfile'>" +
            "<table>" +
                "<p>Gamer Tag: "+user.gamerTag+"</p>" +
                "<p>Email: "+user.email+"</p>" +
                "<img src='" +user.profilePictureURL+ "'/>" +
                "<p>Playing since: "+user.creationDate+"</p>" +
                "<p>Enemies defeated: "+user.enemiesDefeated+"</p>" +
            "</table>" +
        "</div>"+
        "<div class='wrapper'>" +
        "<table>"+
            "<tr>"+
                "<td><button id='btnEdit' class='bigButton btnDark'>Update</button></td>"+
                "<td><button id='btnDelete' class='bigButton btnDark'>Delete</button></td>"+
            "</tr>"+
        "</table>"+
        "</div>"
    );
}