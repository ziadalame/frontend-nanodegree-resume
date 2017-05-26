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

var education = {
    schools: [
        {
            'name': 'Arab Open University',
            'location': 'Beirut, Lebanon',
            'degree': 'Bachelor of Science',
            'majors': ['Computer Science'],
            'dates': '2011 - Present',
            'url': 'http://www.aou.edu.lb'
        }
    ],
    onlineCourses: [
        {
            'title': 'Front End Nanodegree',
            'school': 'Udacity',
            'dates': 'May 2017',
            'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
        }
    ],
    display: function () {
        // Check if education has at least one school or one online course to know whether to keep or remove education title
        if (education.schools.length || education.onlineCourses.length) {
            for (var i = 0; education.schools.length > i; i++) {
                // Add content to HTML
                var formattedName = HTMLschoolName.replace(replacableDataString, education.schools[i].name);
                var formattedDegree = HTMLschoolDegree.replace(replacableDataString, education.schools[i].degree);
                var formattedSchoolDates = HTMLschoolDates.replace(replacableDataString, education.schools[i].dates);
                var formattedLocation = HTMLschoolLocation.replace(replacableDataString, education.schools[i].location);

                // Add education entry div
                $('#education').append(HTMLschoolStart);

                // append school to education entries
                $('.education-entry:last').append(formattedName + formattedDegree);
                $('.education-entry:last').append(formattedSchoolDates);
                $('.education-entry:last').append(formattedLocation);

                // loop over majors
                for (var j = 0; education.schools[i].majors.length > j; j++) {
                    // add content to HTML tag
                    var formattedMajor = HTMLschoolMajor.replace(replacableDataString, education.schools[i].majors[j]);
                    // Apped content
                    $('.education-entry:last').append(formattedMajor);
                }
            }
        } else {
            // remove the education h2 tag by emptying the div tag to avoid showing an empty education section
            $('#education').html('');
        }

        // Check if education has at least one online course to add the title
        if (education.onlineCourses.length) {
            $('#education').append(HTMLonlineClasses);
            
            // loop over online courses
            for (var i = 0; education.onlineCourses.length > i; i++) {
                // add content to HTML tags
                var formattedTitle = HTMLonlineTitle.replace(replacableDataString, education.onlineCourses[i].title).replace('#', education.onlineCourses[i].url);
                var formattedSchool = HTMLonlineSchool.replace(replacableDataString, education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace(replacableDataString, education.onlineCourses[i].dates);
                var formattedUrl = HTMLonlineURL.replace(replacableDataString, education.onlineCourses[i].url);
                
                // Add an education entry div
                $('#education').append(HTMLschoolStart);
                
                // Add education data to entry
                $('.education-entry:last').append(formattedTitle + formattedSchool);
                $('.education-entry:last').append(formattedOnlineDates);
                $('.education-entry:last').append(formattedUrl);
            }
        }
    }
};

// TODO: Add work

// TODO: Add projects

// Add sections to page
bio.display();
education.display();