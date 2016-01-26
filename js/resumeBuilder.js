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

var work ={}
work.current = "Cox Automotive ";
work.title = "Operations Manager ";
work.years = 5;
work.ciry = "Atlanta ";




$("#main").append(work.current);
