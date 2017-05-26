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
    biopic: 'https://avatars2.githubusercontent.com/u/4019318',
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
        for (var a = 0; education.schools.length > a; a++) {
            // Add content to HTML
            var formattedName = HTMLschoolName.replace(replacableDataString, education.schools[a].name);
            var formattedDegree = HTMLschoolDegree.replace(replacableDataString, education.schools[a].degree);
            var formattedSchoolDates = HTMLschoolDates.replace(replacableDataString, education.schools[a].dates);
            var formattedLocation = HTMLschoolLocation.replace(replacableDataString, education.schools[a].location);

            // Add education entry div
            $('#education').append(HTMLschoolStart);

            // append school to education entries
            $('.education-entry:last').append(formattedName + formattedDegree);
            $('.education-entry:last').append(formattedSchoolDates);
            $('.education-entry:last').append(formattedLocation);

            // loop over majors
            for (var j = 0; education.schools[a].majors.length > j; j++) {
                // add content to HTML tag
                var formattedMajor = HTMLschoolMajor.replace(replacableDataString, education.schools[a].majors[j]);
                // Apped content
                $('.education-entry:last').append(formattedMajor);
            }
        }

        // Check if education has at least one online course to add the title
        if (education.onlineCourses.length) {
            $('#education').append(HTMLonlineClasses);

            // loop over online courses
            for (var b = 0; education.onlineCourses.length > b; b++) {
                // add content to HTML tags
                var formattedTitle = HTMLonlineTitle.replace(replacableDataString, education.onlineCourses[b].title).replace('#', education.onlineCourses[b].url);
                var formattedSchool = HTMLonlineSchool.replace(replacableDataString, education.onlineCourses[b].school);
                var formattedOnlineDates = HTMLonlineDates.replace(replacableDataString, education.onlineCourses[b].dates);
                var formattedUrl = HTMLonlineURL.replace(replacableDataString, education.onlineCourses[b].url);

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

var work = {
    jobs: [
        {
            employer: 'FIG',
            title: 'VP of Product',
            location: 'Beirut Lebanon',
            dates: 'January 2017 - Present',
            description: 'I am responsible for delivering a functinal product that satisfies requirements. The product should be tested and ready to use.'
        },
        {
            employer: 'GIVINGLOOP',
            title: 'Co-Founder',
            location: 'Beirut, Lebanon',
            dates: 'June 2016 - March 2017',
            description: 'I was responsible for product and feature strategy. In addition to that I managed a team of developers who were responsible to build the product.'
        }
    ],
    display: function () {
        for (var c = 0; work.jobs.length > c; c++) {

            // Change data
            var formattedEmployer = HTMLworkEmployer.replace(replacableDataString, work.jobs[c].employer);
            var formattedTitle = HTMLworkTitle.replace(replacableDataString, work.jobs[c].title);
            var formattedDates = HTMLworkDates.replace(replacableDataString, work.jobs[c].dates);
            var formattedLocation = HTMLworkLocation.replace(replacableDataString, work.jobs[c].location);
            var formattedDescription = HTMLworkDescription.replace(replacableDataString, work.jobs[c].description);

            // Appende work entry
            $('#workExperience').append(HTMLworkStart);

            // Append work after the last work entry - :last is inspired from the example in the requirements
            $('.work-entry:last').append(formattedEmployer + formattedTitle);
            $('.work-entry:last').append(formattedDates);
            $('.work-entry:last').append(formattedLocation);
            $('.work-entry:last').append(formattedDescription);
        }
    }
};


var projects = {
    projects: [
        {
            'title': 'Fig',
            'dates': 'January 2017 - Present',
            'description': 'A platform that makes offline product discovery easier',
            'images': []
        },
        {
            'title': 'GivingLoop',
            'dates': 'June 2016 - March 2017',
            'description': 'A platform that allows NGOs to raise online recurring donations and manage their donors',
            'images': ['images/givingloop/gl1.png', 'images/givingloop/gl2.png', 'images/givingloop/gl3.png', 'images/givingloop/gl4.png', 'images/givingloop/gl5.png']
        }
    ],
    display: function () {
        for (var p = 0; projects.projects.length > p; p++) {

            // Add data to HTML tags
            var formattedTitle = HTMLprojectTitle.replace(replacableDataString, projects.projects[p].title);
            var formattedDescription = HTMLprojectDescription.replace(replacableDataString, projects.projects[p].description);
            var formattedDates = HTMLprojectDates.replace(replacableDataString, projects.projects[p].dates);

            // Add preojects entry
            $('#projects').append(HTMLprojectStart);

            // Add content to entry
            $('.project-entry:last').append(formattedTitle);
            $('.project-entry:last').append(formattedDates);
            $('.project-entry:last').append(formattedDescription);

            for (var f = 0; projects.projects[p].images.length > f; f++) {
                // Add data to html
                var formattedImage = HTMLprojectImage.replace(replacableDataString, projects.projects[p].images[f]);
                // Append HTML to project entry
                $('.project-entry:last').append(formattedImage);
            }
        }
    }
};

var map = {
    display: function () {
        // Add map to screen
        $('#mapDiv').append(googleMap);
    }
};

// Add sections to page
bio.display();
education.display();
work.display();
projects.display();
map.display();