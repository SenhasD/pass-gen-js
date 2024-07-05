// variable and constant stuff
const Ualpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Lalpha = Ualpha.toLowerCase();
const nums = "123456789";
const special = "!@#$%^&*()<>{}[]";
let ranNum;
const username = document.getElementById('username').value;
let ageIn = document.getElementById('age').value;
let favIn;
let secureTongle = false;
let advancedMode = false;


// function for displaying error and debug messages
function call(query) {
	document.getElementById('LOG_text').textContent = query;
	console.log("DEBUG " + query);
};


// checks if advanced mode enabled or not and enable or disable if required
function advanced() {
	if (advancedMode === false) {
		advancedMode = true;
		call("Enabled advanced mode");
	} else if (advancedMode === true) {
		advancedMode = false;
		call("Disabled advanced mode");
	} else {
		call("Error when enabling or disabling advanced mode");
	};
};

// calling with parsing of user enabled settings to the password generating function
function moreSecure() {
	while (true) {
		const opt = prompt("Do you want to make pass more secure? Requires more questions ")
		if (opt === "yes") {
			secureTongle = true;
			genPass(username, ageIn, favIn, secureTongle);
			break;
		} else if (opt === "no") {
			secureTongle = false;
			genPass(username, ageIn, favIn, secureTongle);
			break;
		} else {
			alert("Didn't catch that pls try again");
			call("User has entered bad prompt when enabling secure mode");
		};
	};
};


function genPass(username, ageIn, favIn, secureTongle) {
	if (secureTongle === true) {
		call("Loaded options with advanced mode");
	} else if (secureTongle === false) {
		call("Loaded options without advanced mode");
	} else {
		call("Error during checking if user enabled advanced mode");
	};
};

