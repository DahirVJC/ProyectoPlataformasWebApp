function cvStructure(user){
    return (
        "<div>" +
            "<header>" +
                "<h1>"+user.name+"</h1>" +
                "<p>Email: "+user.email+"</p>" +
                "<p>Phone: "+user.phone+"</p>" +
            "</header>" +
            "<section>" +
                "<p>"+user.degree+"</p>" +
                "<p>"+user.address+"</p>" +
                "<p>"+user.phone+"</p>" +
                "<p>"+user.languages+"</p>" +
                "</section>" +
            "</section>" +
            "<section>" +
                "<h2>Experience</h2>" +
                "<p>"+user.workName+"<p>" +
                "<p>"+user.workPosition+"<p>" +
                "<p>"+user.workDateIni+"<p>" +
                "<p>"+user.workDateEnd+"<p>" +
                "<p>"+user.workDescription+"<p>" +
            "</section>" +
            "<section>" +
                "<h2>Education</h2>" +
                "<p>"+user.schoolName+"<p>" +
                "<p>"+user.schoolDegree+"<p>" +
                "<p>"+user.schoolDateIni+"<p>" +
                "<p>"+user.schoolDateEnd+"<p>" +
                "<p>"+user.schoolAverage+"<p>" +
                "</section>" +
            "<section>" +
                "<h2>Skills</h2>" +
                "<p>"+user.skills+"<p>" +
            "</section>" +
            "<section>" +
                "<h2>Achievements</h2>" +
                "<p>"+user.achievementName+"<p>" +
                "<p>"+user.achievementDate+"<p>" +
                "<p>"+user.achievementDescription+"<p>" +
            "</section>" +
        "</div>"
    );
}