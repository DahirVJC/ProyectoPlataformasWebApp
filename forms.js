const completeForm = (
        "<br>"+
        "<button class='btnSubtitle btnBright'>Account Information</button>"+
        "<br>"+
        "<br>"+

        "<div>"+
            "<label for='nameTxt'>Name</label>"+
            "<br>"+
            "<input type='text' id='nameTxt' required>"+
        "</div>"+
        "<div>"+
            "<label for='emailTxt'>Email</label>"+
            "<br>"+
            "<input type='email' id='emailTxt' required>"+
        "</div>"+
        "<div>"+
            "<label for='passwordTxt'>Password</label>"+
            "<br>"+
            "<input type='password' id='passwordTxt' required>"+
        "</div>"+

        "<br>"+
        "<button class='btnSubtitle btnBright'>Personal Information</button>"+
        "<br>"+
        "<br>"+

        "<div>"+
            "<label for='degreeTxt'>Degree</label>"+
            "<br>"+
            "<input type='text' id='degreeTxt' required>"+
        "</div>"+
        "<div>"+
            "<label for='addressTxt'>Address</label>"+
            "<br>"+
            "<input type='text' id='addressTxt' required>"+
        "</div>"+
        "<div>"+
            "<label for='phoneTxt'>Phone</label>"+
            "<br>"+
            "<input type='text' id='phoneTxt' required>"+
        "</div>"+
        "<div>"+
            "<label for='languagesTxt'>Languages</label>"+
            "<br>"+
            "<input type='text' id='languagesTxt' required>"+
        "</div>"+

        "<br>"+
        "<button class='btnSubtitle btnBright'>Work Experience</button>"+
        "<br>"+
        "<br>"+

        "<div>"+
            "<label for='workNameTxt'>Work place's name</label>"+
            "<br>"+
            "<input type='text' id='workNameTxt' required>"+
        "</div>"+
        "<div>"+
            "<label for='workPositionTxt'>Position</label>"+
            "<br>"+
            "<input type='text' id='workPositionTxt' required>"+
        "</div>"+
        "<div>"+
            "<label for='workDateIniTxt'>Starting date</label>"+
            "<br>"+
            "<input type='date' id='workDateIniTxt' required>"+
        "</div>"+
        "<div>"+
            "<label for='workDateEndTxt'>Ending date</label>"+
            "<br>"+
            "<input type='date' id='workDateEndTxt' required>"+
        "</div>"+
        "<div>"+
            "<label for='workDescriptionTxt'>Description</label>"+
            "<br>"+
            "<textarea rows='5' id='workDescriptionTxt'></textarea>"+
        "</div>"+

        "<br>"+
        "<button class='btnSubtitle btnBright'>Education</button>"+
        "<br>"+
        "<br>"+

        "<div>"+
            "<label for='schoolNameTxt'>School's name</label>"+
            "<br>"+
            "<input type='text' id='schoolNameTxt' required>"+
        "</div>"+
        "<div>"+
            "<label for='schoolDegreeTxt'>Degree</label>"+
            "<br>"+
            "<input type='text' id='schoolDegreeTxt' required>"+
        "</div>"+
        "<div>"+
            "<label for='schoolDateIniTxt'>Starting date</label>"+
            "<br>"+
            "<input type='date' id='schoolDateIniTxt' required>"+
        "</div>"+
        "<div>"+
            "<label for='schoolDateEndTxt'>Ending date</label>"+
            "<br>"+
            "<input type='date' id='schoolDateEndTxt' required>"+
        "</div>"+
        "<div>"+
            "<label for='schoolAverageTxt'>Average</label>"+
            "<br>"+
            "<input type='number' id='schoolAverageTxt' required>"+
        "</div>"+

        "<br>"+
        "<button class='btnSubtitle btnBright'>Skills</button>"+
        "<br>"+
        "<br>"+

        "<div>"+
            "<label for='skillsTxt'>Skills</label>"+
            "<br>"+
            "<textarea rows='5' id='skillsTxt'></textarea>"+
        "</div>"+

        "<br>"+
        "<button class='btnSubtitle btnBright'>Achievements</button>"+
        "<br>"+
        "<br>"+

        "<div>"+
            "<label for='achievementNameTxt'>Achievement</label>"+
            "<br>"+
            "<input type='text' id='achievementNameTxt' required>"+
        "</div>"+
        "<div>"+
            "<label for='achievementDateTxt'>Date</label>"+
            "<br>"+
            "<input type='date' id='achievementDateTxt' required>"+
        "</div>"+
        "<div>"+
            "<label for='achievementDescriptionTxt'>Description</label>"+
            "<br>"+
            "<textarea rows='5' id='achievementDescriptionTxt'></textarea>"+
        "</div>"
);

const registrationForm=(
    "<h1>Registration form</h1>"+
    "<hr>"+
    completeForm+
    "<br>"+
    "<button id='btnSubmitReg' class='bigButton btnDark'>Register</button>"+
    "<br>"+
    "<br>"
);

const editForm=(
    "<h1>Edit information</h1>"+
    "<hr>"+
    completeForm+
    "<br>"+
    "<button id='btnSubmitEdit' class='bigButton btnDark'>Edit</button>"+
    "<br>"+
    "<br>"
);


const loginForm = (
    "<br>"+
    "<button class='btnSubtitle btnBright'>Welcome Back!</button>"+
    "<br>"+
    "<br>"+

    "<div>"+
        "<label for='nameTxt'>Name</label>"+
        "<br>"+
        "<input type='text' id='nameTxt' required>"+
    "</div>"+
    "<div>"+
        "<label for='passwordTxt'>Password</label>"+
        "<br>"+
        "<input type='password' id='passwordTxt' required>"+
    "</div>"+
    "<br>"+
    "<button id='btnSubmitLog' class='bigButton btnDark'>Log In</button>"+
    "<br>"+
    "<br>"
);