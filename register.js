function registerUser(callback){
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
        "id": 0,
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
        method: 'POST',
        url: "http://localhost:4444/user/register",
        dataType: 'JSON',
        contentType: 'application/json',
        data: JSON.stringify(infoUser),
        success: function (user) {
            activateLogin(user);
            callback(user.id);
        },
        error: function(){
            $("#wrapper").html('');
            $("#wrapper").append("Something went wrong.");
        }
    });
    return -1;
}
