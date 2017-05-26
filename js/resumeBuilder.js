/*
This is empty on purpose! Your code to build the resume will go here.
 */

// Get the string needed to replace and save it in a variable to make more dynamic for future edits
var replacableDataString = "%data%";

var bio = {
    name: 'Ziad Alame',
    role: 'Front End Ninja',
    contacts: {
        mobile: '+961 70 636 133',
        email: 'ziadalame@gmail.com',
        github: '/ziadalame',
        twitter: '@ziadalame', // optional
        location: 'Beirut, Lebanon'
    },
    welcomeMessage: 'Welcome, Bienvenue, Welkom, Καλός ήλθατε, أهلاً وسهلاً. I am Ziad, and I am w web enthusiast from Beirut, Lebanon',
    skills: ['HTML', 'CSS', 'JavaScript', 'Problem Solving'],
    biopic: 'images/fry.jpg',
    display: function () {

        /*
            Step 1:
             - Get and all the HTML needed
             - Follow the variable naming style as per the example: var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        */
        var formattedName = HTMLheaderName.replace(replacableDataString, bio.name);
        var formattedRole = HTMLheaderRole.replace(replacableDataString, bio.role);
        var formattedMobile = HTMLmobile.replace(replacableDataString, bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace(replacableDataString, bio.contacts.email);
        var formattedGithub = HTMLgithub.replace(replacableDataString, bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace(replacableDataString, bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace(replacableDataString, bio.contacts.location);
        var formattedBioPic = HTMLbioPic.replace(replacableDataString, bio.biopic);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace(replacableDataString, bio.welcomeMessage);
        
        // For simplicity, concatenate all contact HTML with each other
        var formattedContact = formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation;

        // Add name and role before existing div
        $('#header').prepend(formattedName + formattedRole);
        // Append Data to existing div in header HTML and footer HTML
        $('#topContacts, #footerContacts').append(formattedContact);
        // Append remaining header details after existing content
        $('#header').append(formattedBioPic + formattedWelcomeMessage);

        // check for skills | 0 = false so if the length is 0, the conditional will skip it's content.
        if (bio.skills.length) {
            // Append skills header
            $('#header').append(HTMLskillsStart);
            // loop over skills and add them one by one
            for (var i = 0; bio.skills.length > i; i++) {
                var formattedSkills = HTMLskills.replace(replacableDataString, bio.skills[i]);
                $('#skills').append(formattedSkills);
            }
        }
    }
};


// Add bio to page
bio.display();