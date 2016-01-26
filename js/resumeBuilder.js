/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = "Charles Conley";
var role = "IT Manager";

FormatedName = HTMLheaderName.replace("%data%", name);

FormatedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(FormatedRole);
$("#header").prepend(FormatedName);

var skills = ["Running ", "Fishing ", "Typing "];

var bio = {
		"name": "Charles Conley ", 
		"role": "Operations Manager ", 
		"contactinfo": {
			"email" : "charles.conley@gmail.com ",
			"phone" : "404-808-5421 "
			}, 
		"picURL": "images/me.png ",
		"welcomeMsg" : "Hello World ",
		"skills" : skills 
	};

bio.city = "Atlanta";

$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contactinfo.phone);
$("#main").append(bio.picURL);
$("#main").append(bio.skills);
$("#main").append(bio.welcomeMsg);
$("#main").append(bio.city);

var work = new Object();
work.current = "Cox Automotive ";
work.title = "Operations Manager ";
work.years = 5;
work.city = " Atlanta ";

//Dot object example
$("#main").append(work.current);
$("#main").append(work.title);
$("#main").append(work.years);
$("#main").append(work.city);

// Alternatively could have used var ed = {};
//var ed = new Object();

// Bracket object example
// You can check for mistakes at http://jsonlint.com/

//ed["School"] = " GSU";
//ed["Years"] = " 2007-2009";
//ed["City"] = " Atlanta";
//$("#main").append(ed.School);
//$("#main").append(ed.Years);
//$("#main").append(ed.City);


// shows all property keys but not values.
// $("#main").append(Object.keys(ed));

//example JSON
var education = [
{"school": "Wayne State",
"schoolcity": "Detroit",
"major": "Chemical Engineering",
"graduation": "1999"
},
{"school": "GSU",
"schoolcity": "Atlanta",
"major": "MBA",
"graduation": "2009"}]
;



