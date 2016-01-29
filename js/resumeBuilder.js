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


var bio = {
		"name": "Charles Conley ", 
		"role": "ITOM Manager ", 
		"contacts": {
			"email" : "charles.conley@gmail.com ",
			"mobile" : "404-808-5421 "
			}, 
		"picURL": "images/me.png",
		"welcomeMessage" : "Hello World ",
		"skills" : ["Running ", "Fishing ", "Typing "]
	};

if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		FormatedSkills = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(FormatedSkills);
		FormatedSkills = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(FormatedSkills);
		FormatedSkills = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(FormatedSkills)};


FormatedName = HTMLheaderName.replace("%data%", bio.name);
FormatedRole = HTMLheaderRole.replace("%data%", bio.role);
FormatedPic = HTMLbioPic.replace("%data%", bio.picURL);

$("#header").prepend(FormatedRole);
$("#header").prepend(FormatedName);
$("#header").prepend(FormatedPic);
//FormatedSkills = HTMLskills.replace("%data%", bio.skills);
//if (bio.skills.length > 0) {$("#skills").append(FormatedSkills)};


var work = {
"jobs": [
	{"employer": "Childrens Hospital",
	"title": "Research Assistant",
	"location": "Detroit, MI",
	"dates": "1997-1999",
	"description": "Rat Surgeon"
	},
	{"employer": "Realestate.com",
	"title": "System Administrator",
	"location": "Atlanta, GA",
	"dates": "1999-2001",
	"description": ".Com Millionaire"
	},
	{"employer": "e-gatematrix",
	"title": "Senior System Administrator",
	"location": "Atlanta, GA",
	"dates": "2001-2005",
	"description": "Second startup. Businesses that use eGate’s end-to-end travel management products gain increased control, speed and accuracy of their daily operations. This enables eGate’s customers to optimize performance, streamline operations, reduce costs, increase revenue-generating opportunities while improving the overall passenger experience."
	},
	{"employer": "Cox Communications",
	"title": "Senior System Administrator",
	"location": "Atlanta, GA",
	"dates": "2006-2011",
	"description": "Fortune 500 Company, 17th largest private company in America"
	}]}

for(var employer in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var FormatedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[employer].employer);
	var FormatedTitle = HTMLworkTitle.replace("%data%", work.jobs[employer].title);
	var FormatedDates = HTMLworkDates.replace("%data%", work.jobs[employer].dates);
	var FormatedDescripton = HTMLworkDescription.replace("%data%", work.jobs[employer].description);
	//new
	var formatedEmployerTitle = FormatedEmployer + FormatedTitle;
	$(".work-entry:last").append(formatedEmployerTitle);
	$(".work-entry:last").append(FormatedDates);
	$(".work-entry:last").append(FormatedDescripton);
	//old
	//$("#workExperience").append(FormatedEmployer, FormatedTitle);
	//console.log(work.jobs[employer].title)
};


var projects = {
"jobs": [
	{"title": "Childrens Hospital",
	"dates": "Research Assistant",
	"description": "Detroit, MI",
	"images": "1997-1999"
	},
	{"title": "Childrens Hospital",
	"dates": "Research Assistant",
	"description": "Detroit, MI",
	"images": "1997-1999"
	},
	{"title": "Childrens Hospital",
	"dates": "Research Assistant",
	"description": "Detroit, MI",
	"images": "1997-1999"
	},
	{"title": "Childrens Hospital",
	"dates": "Research Assistant",
	"description": "Detroit, MI",
	"images": "1997-1999"
	}]}


var education = {
"schools": [
	{"name": "Wayne State",
	"location": "Detroit",
	"degree": "Bachlor of Sciences",
	"major": "Chemical Engineering",
	"dates": "1999",
	"url": "1999"
	},
	{"name": "Georgia State University",
	"location": "Atlanta",
	"degree": "Masters",
	"major": "Business Administration",
	"dates": "1999",
	"url": "http://www.gsu.edu/"
	}],
"onlineCourses": [
	{"title": "Git Basics",
	"school": "Udacity",
	"dates": "2015" ,
	"url": "https://www.udacity.com" },
	{"title": "Front End Design",
	"school": "Udacity",
	"year": "2016",
	"url": "https://www.udacity.com" }]
}
;



