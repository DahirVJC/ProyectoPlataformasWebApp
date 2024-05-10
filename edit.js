function editUser(id){
    uname = $("#nameTxt").val();
    password = $("#passwordTxt").val();
    email = $("#emailTxt").val();
    degree = $("#degreeTxt").val();
    address = $("#addressTxt").val();
    phone = $("#phoneTxt").val();
    languages = $("#languagesTxt").val();
    workName = $("#workNameTxt").val();
    workPosition = $("#workPositionTxt").val();
    workDateIni = $("#workDateIniTxt").val();
    workDateEnd = $("#workDateEndTxt").val();
    workDescription = $("#workDescriptionTxt").val();
    schoolName = $("#schoolNameTxt").val();
    schoolDegree = $("#schoolDegreeTxt").val();
    schoolDateIni = $("#schoolDateIniTxt").val();
    schoolDateEnd = $("#schoolDateEndTxt").val();
    schoolAverage = $("#schoolAverageTxt").val();
    skills = $("#skillsTxt").val();
    achievementName = $("#achievementNameTxt").val();
    achievementDate = $("#achievementDateTxt").val();
    achievementDescription = $("#achievementDescriptionTxt").val();
    infoUser = {
        "id": id,
        "name": uname,
        "password": password,
        "email": email,
        "degree": degree,
        "address": address,
        "phone": phone,
        "languages": languages,
        "workName": workName,
        "workPosition": workPosition,
        "workDateIni": workDateIni,
        "workDateEnd": workDateEnd,
        "workDescription": workDescription,
        "schoolName": schoolName,
        "schoolDegree": schoolDegree,
        "schoolDateIni": schoolDateIni,
        "schoolDateEnd": schoolDateEnd,
        "schoolAverage": schoolAverage,
        "skills": skills,
        "achievementName": achievementName,
        "achievementDate": achievementDate,
        "achievementDescription": achievementDescription
      }
    
      $.ajax({
        method: 'PUT',
        url: "http://localhost:4444/user/update",
        dataType: 'TEXT',
        contentType: 'application/json',
        data: JSON.stringify(infoUser),
        success: function () {
            $("#wrapper").html('');
            $("#wrapper").append("Your information has changed");
        },
        error: function(){
            $("#wrapper").html('');
            $("#wrapper").append("Something went wrong.");
        }
    });
}
