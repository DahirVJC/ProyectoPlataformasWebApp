function profileStructure(user){
    return (
        "<div>" +
            "<header>" +
                "<p>Gamer Tag: "+user.gamerTag+"</p>" +
                "<p>Email: "+user.email+"</p>" +
                "<p>Playing since: "+user.creationDate+"</p>" +
                "<p>Enemies defeated: "+user.enemiesDefeated+"</p>" +
            "</header>" +
        "</div>"
    );
}