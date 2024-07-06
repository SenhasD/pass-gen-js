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

// function for displaying error and debug messages
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
			call("Parsing user data: \nUsername: " + username + "\nNumber: " + ageIn + "\nTongles: Secure mode: " + secureTongle);
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

function Random(rep) {
	const pi = 3.14159265359;
	let tmp = 0;
	tmp = tmp + nums.length + special.length;
	tmp *= pi*rep;
	return tmp;
};


function genPass(username, ageIn, favIn, secureTongle) {
	const result = Random(ageIn);
	alert(result);
};

