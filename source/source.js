// variable and constant stuff
const Ualpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Lalpha = Ualpha.toLowerCase();
const nums = "123456789";
const special = "!@#$%^&*()<>{}[]";
let ranNum;
let username;
let ageIn; 
let favIn;
let secureTongle = false;

// function for displaying error and debug messages AKA parser
function call(query) {
	document.getElementById('LOG_text').textContent = query;
	console.log("DEBUG " + query);
};

// calling with parsing of user enabled settings to the password generating function
function moreSecure() {
	while (true) {
		const opt = prompt("Do you want to make pass more secure? Requires more questions ");
		if (opt === "yes") {
			secureTongle = true;
			favIn = prompt("Enter something you like anything");
			call("Parsed");
			username = document.getElementById('username').value;
			ageIn = document.getElementById('age').value;
			genPass(username, ageIn, favIn, secureTongle);
			break;
		} else if (opt === "no") {
			secureTongle = false;
			call("Stopped using secure mode");
			break;
		} else {
			alert("Didn't catch that pls try again");
			call("User has entered bad prompt when enabling secure mode");
		};
	};
};

// creating a unique user id
function Random(rep) {
	const pi = 3.14159265359;
	let tmp = 0;
	tmp = tmp + nums.length + special.length;
	tmp *= pi*rep;
	ranNum = Math.floor(tmp/3);
	return ranNum;
};

// parsing data without secure mode enabled
function normalParser() {
	call("Parsed");
	username = document.getElementById('username').value;
	ageIn = document.getElementById('age').value;
	genPass(username, ageIn, favIn, secureTongle);
};

// generating the password
function genPass(username, ageIn, favIn, secureTongle) {
	const result = Random(ageIn);
	call("ID generated: " + result[0][2]);	
	var store = {
		UserData: {
			Name: username,
			Number: ageIn, 
			Fav: favIn },
		Settings: {
			Secure_mode: secureTongle },
	};
	console.log(store);
};
