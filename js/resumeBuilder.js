/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
var name = "Charles Conley";
var role = "IT Manager";

FormatedName = HTMLheaderName.replace("%data%", name);

FormatedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(FormatedRole);
$("#header").prepend(FormatedName);
*/
$("#main").append(internationalizeButton);

var bio = {
    "name": "Charles Conley ",
    "role": "ITOM Manager ",
    "contacts": {
        "mobile": "404-808-5421 ",
        "email": "charles.conley@gmail.com ",
        "github": "none",
        "twitter": "none",
        "location": "Atlanta GA"
    },
    "welcomeMessage": "Enterprise Systems Management thought leader and practitioner with an emphasis on availability, performance and stability of instrumentation rolled up to Business-relevant Dashboard.",
    "skills": ["Six Sigma ", "Splunk ", "AppDynamics", "Bash", "MuleSoft", "Git", "JSON", "Jave Scripting", "vRealize", "HTML/CSS", "DevOps"],
    "biopic": "images/me.png",
    "display": function display() {
        FormatedName = HTMLheaderName.replace("%data%", bio.name);
        FormatedRole = HTMLheaderRole.replace("%data%", bio.role);
        FormatedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        FormatedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        FormatedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        FormatedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        FormatedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        FormatedPic = HTMLbioPic.replace("%data%", bio.biopic);
        FormatedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header:last").prepend(FormatedRole);
        $("#header:last").prepend(FormatedName);
        $("#topContacts:last").prepend(FormatedLocation);
        $("#topContacts:last").prepend(FormatedTwitter);
        $("#topContacts:last").prepend(FormatedGithub);
        $("#topContacts:last").prepend(FormatedMobile);
        $("#topContacts:last").prepend(FormatedEmail);
        $("#footerContacts:last").prepend(FormatedLocation);
        $("#footerContacts:last").prepend(FormatedTwitter);
        $("#footerContacts:last").prepend(FormatedGithub);
        $("#footerContacts:last").prepend(FormatedMobile);
        $("#footerContacts:last").prepend(FormatedEmail);
        $("#header:last").append(FormatedwelcomeMsg);
        $("#header:last").append(FormatedPic);
        $("#header:last").append(HTMLskillsStart);
        for (var skills in bio.skills) {
            //$("#skills").append(HTMLskillsStart);
            FormatedSkills = HTMLskills.replace("%data%", bio.skills[skills]);
            $("#skills").prepend(FormatedSkills);
        }
    }
};
//runs function
bio.display();

var work = {
    "jobs": [{
        "employer": "Childrens Hospital",
        "title": "Research Assistant",
        "location": "Detroit, MI",
        "dates": "1997-1999",
        "description": "A research assistant is a researcher employed, often on a temporary contract, by a university or a research institute, for the purpose of assisting in academic research."
    }, {
        "employer": "Realestate.com",
        "title": "System Administrator",
        "location": "Atlanta, GA",
        "dates": "1999-2001",
        "description": "A system administrator, or sysadmin, is a person who is responsible for the upkeep, configuration, and reliable operation of computer systems; especially multi-user computers, such as servers."
    }, {
        "employer": "e-gatematrix",
        "title": "Senior System Administrator",
        "location": "Atlanta, GA",
        "dates": "2001-2005",
        "description": "Second startup. e-gatematric created eGate’s end-to-end travel management products gain increased control, speed and accuracy of their daily operations. This enables eGate’s customers to optimize performance, streamline operations, reduce costs, increase revenue-generating opportunities while improving the overall passenger experience."
    }, {
        "employer": "Cox Communications",
        "title": "Senior System Administrator",
        "location": "Atlanta, GA",
        "dates": "2006-2011",
        "description": "Fortune 500 Company, 17th largest private company in America"
    }],
       "display": function display() {
        for (i = 0, len = work.jobs.length; i < len; i++) {
            $("#workExperience").append(HTMLworkStart);
            var FormatedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var FormatedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var FormatedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var FormatedDescripton = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            var formatedEmployerTitle = FormatedEmployer + FormatedTitle;
            $(".work-entry:last").append(formatedEmployerTitle);
            $(".work-entry:last").append(FormatedDates);
            $(".work-entry:last").append(FormatedDescripton);
        }
    }
};
//runs function
work.display();



var projects = {
    "jobs": [{
        "title": "AtlantaDanceCommunity.com",
        "dates": "2014-2016",
        "description": "Reviews and postings for creative dance in the greater Atlanta Area",
        "images": ["images/ballet-04.jpeg", "images/ballet-03.jpeg"]
    }, {
        "title": "uDacity Resume Site", 
        "dates": "2015-2016",
        "description": "Learning Java Scripting and JQuery",
        "images": ["images/ballet-03.jpeg", "images/ballet-04.jpeg"]
    }],
  "display": function display() {
        for (var title in projects.jobs) {
            $("#projects").append(HTMLprojectStart);
            var FormatedTitle = HTMLprojectTitle.replace("%data%", projects.jobs[title].title);
            var FormatedDates = HTMLprojectDates.replace("%data%", projects.jobs[title].dates);
            var FormatedDescripton = HTMLprojectDescription.replace("%data%", projects.jobs[title].description);
            $(".project-entry:last").append(FormatedTitle);
            $(".project-entry:last").append(FormatedDates);
            $(".project-entry:last").append(FormatedDescripton);
            for (i = 0, len = projects.jobs[title].images.length; i < len; i++) { 
                var FormatedImage = HTMLprojectImage.replace("%data%", projects.jobs[title].images[i]);
                $(".project-entry:last").append(FormatedImage);
                };
        }
    }
 };
projects.display();

var education = {
    "schools": [{
        "name": "Wayne State University",
        "location": "Detroit ",
        "degree": "Bachlor of Sciences",
        "majors": ["Chemical Engineering"],
        "dates": 1999,
        "url": "https://wayne.edu/"
    }, {
        "name": "Georgia State University",
        "location": "Atlanta ",
        "degree": "Masters",
        "majors": ["Business Administration"],
        "dates": 2008,
        "url": "http://www.gsu.edu/"
    }],
    "onlineCourses": [{
        "title": "Git Basics",
        "school": "Udacity",
        "date": 2015,
        "url": "https://www.udacity.com "
    }, {
        "title": "Front End Design",
        "school": "Udacity",
        "date": 2016,
        "url": "https://www.udacity.com "
    }],
    "display": function display() {
        for (var name in education.schools) {
            $("#education").append(HTMLschoolStart);
            var FormatedSchool = HTMLschoolName.replace("%data%", education.schools[name].name);
            var FormatedDegree = HTMLschoolDegree.replace("%data%", education.schools[name].degree);
            var FormatedMajor = HTMLschoolMajor.replace("%data%", education.schools[name].majors);
            var FormatedDates = HTMLschoolDates.replace("%data%", education.schools[name].dates);
            var FormatedLocation = HTMLschoolLocation.replace("%data%", education.schools[name].location);
            //var FormatedURL = HTMLDates.replace("%data%", education.schools[name].url);
            $(".education-entry:last").prepend(FormatedSchool);
            $(".education-entry:last").append(FormatedDates);
            $(".education-entry:last").append(FormatedLocation);
            $(".education-entry:last").append(FormatedMajor);
            $(".education-entry:last").append(FormatedDegree);
        }
        $("#education").append(HTMLonlineClasses);
        for (var title in education.onlineCourses) {
            $("#education").append(HTMLschoolStart);
            var FormatedoDegree = HTMLonlineTitle.replace("%data%", education.onlineCourses[title].title);
            var FormatedoSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[title].school);
            var FormatedoDates = HTMLonlineDates.replace("%data%", education.onlineCourses[title].date);
            var FormatedoURL = HTMLonlineURL.replace("%data%", education.onlineCourses[title].url);
            $(".education-entry:last").append(FormatedoDegree);
            $(".education-entry:last").append(FormatedoSchool);
            $(".education-entry:last").append(FormatedoDates);
            $(".education-entry:last").append(FormatedoURL);
        }
    }
};

education.display();

//logs clicks
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});


//Adds button and changes format of name.
function inName() {
    var parts = [];
    parts = bio.name.split(" ");
    firstname = parts[0];
    lastname = parts[1].toUpperCase();
    bio.name = firstname + " " + lastname;
    return bio.name;
}

$("#mapDiv").append(googleMap);