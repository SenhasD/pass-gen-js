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

const sleep = ms => new Promise(r => setTimeout(r, ms));

function advancedModeEnable() {
	advancedMode = true;
};

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
		};
	};
};


function genPass(username, ageIn, favIn, secureTongle) {	

};

