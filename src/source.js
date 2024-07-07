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
const defaults = ["Enter a name or a username for the password to be created", "Enter the password length"];
let counter = 0;
let counter2 = 0;


// function for displaying error and debug messages AKA parser
function call(query) {
	document.getElementById('LOG_text').textContent = query;
	console.log("DEBUG " + query);
};

function restore(opt1, opt2, question, isRestore, isClear) {
	document.getElementById('btn1').textContent = opt1;
	document.getElementById('btn2').textContent = opt2;
	document.getElementById('bigText').textContent = question;
	if (isRestore === true) {
		document.getElementById('header1').textContent = defaults[0];
		document.getElementById('header2').textContent = defaults[1];
		document.getElementById('bigText').textContent = "";
		document.getElementById('btn1').textContent = "Submit with default settings";
		document.getElementById('btn2').textContent = "Submit with advanced settings";
	};
	if (isClear === true) {
		document.getElementById('header1').textContent = "";
		document.getElementById('header2').textContent = "";
	};
};
// calling with parsing of user enabled settings to the password generating function
function moreSecure() {
	counter++;
	if (counter === 1) {
		restore("Yes", "", "Do you want to enable advanced mode?", false, true);
		document.getElementById('username').remove()
		document.getElementById('age').remove()
		document.getElementById('btn2').remove()

	} else if (counter === 2) {
		restore("", "", "", true, false);
		counter = 0;
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
	counter2++;
	if (counter2 === 1) {
		secureTongle = false;
		call("Parsed");
		username = document.getElementById('username').value;
		ageIn = document.getElementById('age').value;
		genPass(username, ageIn, favIn, secureTongle);
	} else if (counter2 === 2) {
		secureTongle = true;
		call("Parsed");
		username = document.getElementById('username').value;
		ageIn = document.getElementById('age').value;
		genPass(username, ageIn, favIn, secureTongle);
		counter2 = 0;
	};

};

// generating the password
function genPass(username, ageIn, favIn, secureTongle) {
	ranNum = Random(ageIn);
	let tmp = Math.trunc(ranNum);
	ranNum = tmp.toString();
	let ID = Number(ranNum.slice(0, 2));
	call("ID generated: " + Math.trunc(ID));	
	var store = {
		UserData: {
			Name: username,
			Number: ageIn, 
			Fav: favIn },
		Settings: {
			Secure_mode: secureTongle,
			Algorithms: ["Caesar Cipher", "Vigenère Cipher", "Base64 Encoding", "XOR Cipher"] },
	};
	console.log(store);
	const settings = Object.values(store.Settings);
	console.log("Settings: " + settings);
};
